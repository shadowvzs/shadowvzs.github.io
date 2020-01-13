(function(db, stats) {
		const $app = document.querySelector('#app');
		const $settings = $app.querySelector('.settings');
		const $classTypes = $settings.querySelectorAll('input[name="classType"]');
		const $list = $app.querySelector('.list');
		const $preview = $app.querySelector('.preview');
		const $previewDetail = $preview.querySelector('.details');
		const $previewRecipe = $app.querySelector('.recipe');
		let currentClassType;
		$settings.querySelectorAll('input[name="classType"]').forEach(x => {
			if (x.checked) currentClassType = x.value;
			x.onchange = () => {
				currentClassType = x.value;
				render();
			};
		});
		const listItemRender = (item) => {
			return `<a href="?book=${item.id}" title="${item.name}">${item.name} (lv. ${item.level})</a>`;
		};
		
		const listRender = (items) => {
			const renderedItems = [];
			let i;
			for (i in items) {
				if (items[i].level === 0) continue;
				renderedItems.push(listItemRender(items[i]));
			}
			return `<h1>Sacred Books</h1><div class="list-container">${renderedItems.join('')}</div>`;
		};
		
		const itemStats = (itemStats) => {
			const statList = stats[currentClassType];
			if (!itemStats || !Array.isArray(itemStats)) return '';
			return itemStats.map(([id, value]) => {
				const stat = statList[id];
				return `<div class='stat-row'>${stat.name} +${value}${stat.perc ? '%' : ''}</div>`;
			}).join('');
		}
		
		const previewItemRender = (bookId) => {
			if (!bookId) { return ''; }
			const item = db[bookId];
			
			return `<header>
					<div class="icon">
						<img src="./img/tome.png" width="48" height="48" />
					</div>
					<div class="title-line">
						<div class="title"> ${item.name} </div>
						<div> Lv. ${item.level} </div>
					</div>
				</header>
				<main>
					<div class="sub-title">Rank: 1</div>
					<div class="br">BR: ${item.initBr}</div>
					<div class="sub-title"> Stats (Equip) </div>
					${itemStats(item.statEquip)}
					<div class="sub-title"> Stats (Master) </div>
					${itemStats(item.statMaster)}
					${item.description ? `<div class="sub-title"> Skill </div> <div class="skill">${item.description}</div>` : ''}
					<div class="source"> The source of divine knowledge. </div>
				</main>`;
		};
		
		const getRecipeMap = (itemList) => {
			const result = {};
			let item, count;
			for (let i in itemList) {
				item = db[i];
				count = itemList[i];
				item.source.forEach(([id, qty = 1]) => result[id] = (result[id] || 0) + qty * count );
			}
			return result;
		}
		
		const previewRecipeRender = (bookId) => {
			if (!bookId) { return ''; }
			const item = db[bookId];
			if (typeof item.source === 'string') { 
				return `<div class="recipe-group">${item.source}</div>`;
			}
			const map = [];
			let i = item.level;
			let list = { [item.id]: 1 };
			for (; i > 0; i--) {
				list = map[i - 1] = getRecipeMap(list);
			}
			
			let result = '';
			for (i=map.length - 1;i>=0;i--) {
				result += `
					<div class="recipe-group"> <h3>Level ${i}</h3>
						${Object.keys(map[i]).map(x => `<div class="recipe-item"><a href="?book=${x}">${db[x].name}</a> x${map[i][x]}</div>`).join('')}
					</div>`;
			}
			return result;
		};
		
		const render = () => {
			const urlParams = new URLSearchParams(window.location.search);
			const bookId = urlParams.get('book');
			$list.innerHTML = listRender(db);
			$previewDetail.innerHTML = previewItemRender(bookId);
			$previewRecipe.innerHTML = previewRecipeRender(bookId);
		}
		
		render();
	})(db, stats);