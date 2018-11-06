const componentData = {
	settings: {
		launchBar: {
			id: "lnchbr",
			name: "Launchbar",
			description: "Responsable for launcher icons",
			icon: "",
			container: ".task-app-list",
			toggle: ".app-list-toggle",
			maxProc: 1,
		},
		taskManager: {
			id: "tskmngr",
			name: "System Taskbar",
			description: "Responsable for managing the taskbar",
			icon: "sys_task",
			launchbar: true,
			focusClass: "active",
			windowClass: ["system-manager", "window-light-blue"],
			group: ".task-win-group",
			container: ".task-win-container",
			maxProc: 1,
			relationship: {
				datasource: 'fileSystem',
				window: 'windowManager',
			}
		},
		displayManager: {
			id: "dsplymngr",
			name: "Display Settings",
			description: "Responsable for managing background",
			icon: "sys_display",
			launchbar: true,
			windowClass: ["desktop-settings", "window-light-blue"],
			maxProc: 1,
			relationship: {
				window: 'windowManager',
			}
		},
		clockManager: {
			id: "clkmngr",
			name: "System Clock",
			description: "Responsable for keep time realated parts like right side clock",
			icon: "",
			taskbar: true,
			maxProc: 1,
			showUI: true,
			placeholder: "time#clock",
		},
		contextMenu: {
			id: "cntxtmn",
			name: "Right Click Menu",
			description: "Responsable for create right click menu from array",
			icon: "",
			width: "auto",
			className: 'contextMenu',
			maxProc: 1,
		},
		virtualClipboard: {
			id: "vrtlclpbrd",
			name: "Clipboard",
			description: "Responsable for register item/items in virtual clipboard",
			icon: "",
			maxProc: 1,
		},
		desktopManager: {
			id: "dsktpmngr",
			name: "Properties",
			description: "Responsable for create, arrange icons, send data to context menu",
			icon: "fullscreen_1",
			maxProc: 20,
			container: '.desktop-container',
			launchbar: true,
			windowClass: ["file-properties", "window-light-blue"],
			relationship: {
				datasource: 'fileSystem',
				menu: 'contextMenu',
				display: 'displayManager',
				clipboard: 'virtualClipboard',
				explorer: 'fileExplorer',
				window: 'windowManager',
			}
		},
		startMenuManager: {
			id: "strtmnmngr",
			name: "Start Menu",
			description: "Responsable for start menu",
			icon: "",
			label: "Start",
			placeholder: ".start-menu-button",
			maxProc: 1,
			relationship: {
				datasource: 'fileSystem'
			}
		},
		fileSystem: {
			id: "flsstm",
			name: "File System",
			description: "Responsable for file & folder crud (json data manipulation)",
			icon: "",
			maxProc: 1,
			relationship: {
				desktop: 'desktopManager',
				startmenu: 'startMenuManager',
			},
			database: './vfs.json',
		},
		fileExplorer: {
			id: "flxplrr",
			name: "File Explorer",
			description: "Responsable for browsing in directories",
			windowClass: ["file-explorer", "window-light-blue"],
			windowSize: {
				minW: 200,
				minH: 200,
			},
			icon: "folder",
			taskbar: true,
			randomPosition: true,
			maxProc: 20,
			relationship: {
				desktop: 'desktopManager',
				window: 'windowManager',
				datasource: 'fileSystem'
			},
		},
		windowManager: {
			id: "wndwmngr",
			name: "Window Manager",
			description: "Responsable for handle the windows",
			icon: "",
			maxProc: 1,
			contentSelector: '.content',
			relationship: {
				task: 'taskManager',
			},
		},
		audioManager: {
			id: "dmngr",
			name: "Sound Settings",
			description: "Responsable for volume controll",
			icon: "soundon",
			launchbar: true,
			maxProc: 1,
			relationship: {
				launch: 'launchBar',
			},
		},
		terminal: {
			id: "trmnl",
			name: "Terminal",
			description: "Ubuntu terminal simulator",
			icon: "terminal",
			windowClass: ["terminal", "window-dark"],
			windowSize: {
				minW: 200,
				minH: 200,
			},
			randomPosition: true,
			launchbar: true,
			maxProc: 20,
			relationship: {
				window: 'windowManager',
				datasource: 'fileSystem',
			}
		},
		htmlViewer: {
			id: "htmlvwr",
			name: "HTML Viewer",
			description: "Responsable for opening the html files",
			icon: "doc",
			windowClass: ["html-viewer", "window-light-blue"],
			windowSize: {
				full: true
			},
			maxProc: 20,
			relationship: {
				window: 'windowManager',
				datasource: 'fileSystem',
			}
		}
	},
	classes: {
		clockManager(settings, shared = false) {
			const placeholder = document.body.querySelector(settings.placeholder) || null;
			let timerId;
			if (settings.showUI) {
				updateClock(new Date())
				if (placeholder) {
					placeholder.dataset.timezone = getTimeZone();
					timerId =  setInterval( () => {
						updateClock(new Date());
					}, 1000);
				}
			}

			function updateClock(time) {
				const clock = shared.getFormattedTime(time);
				placeholder.textContent = clock;
				placeholder.dataset.time = clock;
				placeholder.dataset.date = shared.getNamedDate(time);
			}

			function getTimeZone() {
				const time = new Date(),
					timeZone = Math.round(time.getTimezoneOffset() / 60);
				return timeZone > 0 ? "-" + timeZone : "+" + -timeZone;
			}

			return {
				remove() {
					if (timerId) {
						clearInterval(timerId);
					}
				}
			}
		},

		contextMenu (settings, shared = false) {
			const width = settings.width || 200,
				id = 'contextmenu_'+Date.now();
			let dom;

			function init() {
				dom = document.createElement("div");
				dom.classList.add(settings.className);
				dom.setAttribute("tabindex","-1");
				dom.style.width = width+'px';
				dom.textContent = "";
				dom.id = id;
				document.body.appendChild(dom);
				dom.addEventListener('blur', blurEvent);
				dom.onclick = function() { setTimeout( blurEvent, 100); };
			}

			function blurEvent() {
				dom.classList.remove('show');
			}

			function moveContextMenu(e) {
				const px = e.pageX,
					  py = e.pageY,
					  cx = dom.offsetWidth,
					  cy = dom.offsetHeight,
				 	  wx = document.body.clientWidth,
	 			  	  wy = document.body.clientHeight;
				let	nx, ny;

				ny = (py+cy > wy) ? (wy-cy > 0 ? wy-cy : 0) : py;
				nx = (px+cx > wx) ? (wx-cx > 0 ? wx-cx : 0) : px;

				dom.style.top = py+'px';
				dom.style.left = ((px+cx > wx) ? (wx-cx > 0 ? wx-cx : 0) : px)+'px';
				dom.classList.add('show');
				dom.focus();
			}

			function populateContextMenu(list, id) {
				let str = "";
				while (dom.firstChild) {dom.removeChild(dom.firstChild)};
				if (list) {
					const ul = document.createElement('ul');
					ul.dataset.id = id;
					for (let row of list) {
						str = `data-click="${row[1]}.${row[2]}." data-extra = "${row[3].join('/')}"`;
						if (!row[1]) {
							str += ` class="disabled"`;
						}
						ul.insertAdjacentHTML('beforeend', `<li ${str}>${row[0]}</li>`);
					}
					dom.appendChild(ul);
				}
			}

			init();

			return {
				getId() {
					return dom.id || false;
				},
				remove() {
					dom.removeEventListener('blur', blurEvent);
				},
				create(e, list = [], id = 0) {
					populateContextMenu(list, id);
					moveContextMenu(e);
					e.preventDefault();
				}
			}
		},

		virtualClipboard(settings, shared = false) {
			const container = document.querySelector(settings.container),
				{ components, isEmpty } = shared;
			let clipboard = [];


			function addItems(e) {
				clipboard.push(...[e.dataset.extra.split("/")]);
				return true;
			}

			return {
				getItems() {
					return clipboard;
				},
				addItems(e, ev) {
					addItems(e);
				},
				clear() {
					clipboard = [];
				}
			}
		},

		desktopManager(settings, shared = false) {
			const defaultContainer = getDOM(settings.container),
				{ guid, sec2Date, getPath, components, isEmpty, assoc } = shared,
				cName = settings.constructorName,
				relationship = settings.relationship,
				{datasource: ds, window: win, display} = relationship,
				launcherBar = document.body.querySelector(`.task-app-list`),
				template = {
					tooltip(item) {
						return `ID: ${item.id}&#013Description: ${item.description}&#013;`;
					},
					propertiesWrapper(p) {
						const prop = p.map( e => template.propertiesLine(e) ).join('');
						return `<div class="file-info">${prop}</div>`
					},
					propertiesLine(e) {
						const padding = "".padStart(5, "&nbsp;");
						return `<p><b>${e[0]}:</b> ${padding}</p><p>${e[1]}</p>`
					},
					properties(item) {
						const info = [
							["ID", item.id],
							["Type", item.type],
							["Open with", assoc[item.type] || "Unknown"],
							["Status", item.readonly ? "readonly" : "writeable"]
						];
						if (item.child && item.child.length) {
							info.push(["Content", `${item.child.length} file(s) or folder(s)`]);
						}
						info.push(["Created at", sec2Date(item.createtime)]);
						info.push(["Modified at", sec2Date(item.lastmodify)]);

						return template.propertiesWrapper(info);
					}
				};
			let icons = [],
				windows = [],
				fullScreen = false;

			function CreateDesktopIcon(item, targetContainer = defaultContainer, newWindow = true) {
				targetContainer.insertAdjacentHTML('beforeend', `<div class="de-icon no-select" data-item-id="${item.id}">
					<a title="${template.tooltip(item)}" data-click="${ds}.execute" data-contextmenu="${cName}.createMenu" data-id="${item.id}" data-container="${targetContainer.dataset.id}" data-new="${newWindow}" data-type="icon">
						<div class="DesktopIconImgBox">
							<img src="${getPath('desktop', item.icon)}" />
						</div>
					</a>
					<p title="${item.name}">
						<div class="de-text-box icon-text" data-id="${item.id}">
							<input class="d-none" type="text" maxlength="24" value="${item.name}" />
							<span data-click="${cName}.toggleRename">${item.name}</span>
						</div>
					</p>
				</div>`);
				const icon = targetContainer.lastChild;
				icon.querySelector("input").onblur = inputBlur;
				icon.querySelector("input").onkeyup = nameConfirm;
				createDragable(icon);
				if (item.type == "dir" && !item.readonly) {
					createDropTarget(icon);
				}
			}

			function init(list) {
				for (const item of list) {
					if (!item.ondesktop) { continue; }
					CreateDesktopIcon(item);
				}
				createDropTarget(defaultContainer);
				shared.createDropTarget = createDropTarget;
				shared.createDragable = createDragable;
			}

			function createDragable(e) {
				e.ondragstart = dragStart;
				e.draggable = true;
			}

			function createDropTarget(e) {
				e.ondragover = onDragOver;
				e.ondrop = onDrop;
			}

			function onDragOver(ev) {
				ev.preventDefault();
			}

			function onDrop(ev) {
				let e = ev.target;
				ev.preventDefault();
				ev.stopPropagation();
				if (e.tagName == "IMG") {
					e = e.parentNode.parentNode;
				}
				const data = e.dataset,
					{ container, type, itemId = false, id = false } = data,
					targetId = itemId || id || false,
					sourceId = ev.dataTransfer.getData("text") || false;
				if (!targetId || !sourceId || targetId == sourceId) {
					return;
				}
				const item = components[ds].copyItem(targetId, sourceId, true);
				if (item) {
					const sourceIcons = document.body.querySelectorAll(`.de-icon[data-item-id="${sourceId}"]`);
					if (type == "free") {
						const targetWin = document.body.querySelector(`.content[data-id="${id}"]`)
							max = sourceIcons.length;
						if (targetWin) {
							CreateDesktopIcon(item, targetWin, container == -1);
						}
					}
					for (const icon of sourceIcons) {
						icon.remove();
					}
				}
			}

			function dragStart(ev) {
				const id = ev.target.parentNode.parentNode.dataset.id;
				ev.dataTransfer.setData("Text", id);
			}

			function inputBlur(e) {
				e.preventDefault();
				toggleRename(e.target.parentNode);
			}

			function nameConfirm(e) {
				e.preventDefault();
				if (e.keyCode === 13) {
					rename(e.target);
				} else if (e.keyCode === 27) {
					toggleRename(e.target.parentNode);
				}
			}

			function createNewWindow() {
				const options = {
					data: false,
					appClass: settings.windowClass,
					title: settings.name,
					source: settings.constructorName,
					windowSize: settings.windowSize,
					randomPosition: settings.randomPosition,
					icon: settings.icon,
				};
				return components[win].register(options);
			}

			function start(e, ev) {
				const datasource = components[ds],
					id = e.parentNode.dataset.id || null,
					item = datasource.get(id),
					t = e.parentNode;
				if (!id || !item) {
					return console.log("file not exist or missing id");
				}
				if (windows.length >= settings.maxProc) {
					return console.log('Too much opened window, cannot open more!');
				}

				let win = createNewWindow();
				if (!win) {
					console.log("Failed to create new window!");
					return false;
				}
				win.body.innerHTML = template.properties(item);

				win.h4 = win.dom.querySelector('.header h4');
				win.h4.dataset["afterText"] = "- " + item.name;
				win.dom.style.top = ev.clientY - t.offsetHeight;
				win.dom.style.left = parseInt(t.parentNode.style.left, 10);
				windows.push(win);
				return win;
			}

			function getContainer(id) {
				const window = components[win].getWindow(id);
				if (!window) {
					return defaultContainer;
				}
				return window.body;
			}

			function toggleRename(e) {
				const childs = e.children || false;
				if (childs) {
					for (const child of childs) {
						child.classList.toggle('d-none');
						if (child.tagName == "INPUT") {
							child.focus();
							child.select();
						}
					}
				}
			}

			function rename(e) {
				const datasource = components[ds],
					id = e.parentNode.dataset.id || null;
				if (!datasource || !id) {
					return console.log("file system not exist or missing id");
				}
				const item = datasource.get(id),
					input = e.parentNode.querySelector("input");
				if (!item || !input) {
					return console.log("file or folder not exist!");
				}


				item.name = input.value;
				item.lastmodify = Math.floor(Date.now() / 1000);
				if (datasource.save()) {
					const parent = e.parentNode;
						span = parent.querySelector('span');
					if (span) {
						span.textContent = item.name;
					}
					toggleRename(parent);
				}
			}

			function createMenu(e, ev) {
				const { id, container = false, type = "icon", itemId = false } = e.dataset,
					datasource = components[ds],
					clipboard = components[relationship.clipboard || "null"] || null;
					menu = components[relationship.menu || "null"] || null;
				const targetId = itemId || id;
				if (!targetId || !container) {
					return console.log("Not exist id or container data on this element");
				}

				let list;
				if (type == "free") {
					list = [
						["New Folder", cName, "createNew", [targetId, container, 'dir']],
						["New File", cName, "createNew", [targetId, container, 'html']],
						["Paste", cName, "paste", [targetId, container, type]],
						//["Arrange Icon", relationship.clipboard, "addItems", ['fs', id, 'true']],
						["Terminal", "terminal", "launch", [targetId]],
						//["Settings", display, "launch", [targetId]],
						["Properties", display, "launch", [targetId]],
					];

					if (isEmpty(clipboard.getItems())) {
						list.splice(2, 1);
					}

				} else if (type == "icon") {
					const item = datasource.get(targetId);
					list = [
						["Run", ds, "execute", [targetId]],
						["Copy", relationship.clipboard, "addItems", ['fs', targetId, 'false']],
						["Cut", relationship.clipboard, "addItems", ['fs', targetId, 'true']],
						["Paste", cName, "paste", [targetId, type]],
						["Rename", cName, "toggleRename", [targetId]],
						["Delete", cName, "remove", [targetId]],
						["Properties", cName, "properties", [targetId]],
					];

					if (item.type == "dir") {
						list[0][0] = "Open";
					}

					if (e.readonly) {
						list[2][1] = false;
						list.splice(4, 1);
					}

					if (isEmpty(clipboard.getItems()) || item.type != "dir") {
						list[3][1] = false;
						list.splice(3, 1);
					}
				}

				if (targetId != -1) {
					list.splice(-1,0, ["Link", cName, "link", [targetId]]);
				}

				if (list) {
					menu.create(ev, list, targetId );
				}
			}

			function deleteIcon(id) {
				const icons = document.body.querySelectorAll(`.de-icon[data-item-id="${id}"]`);
				for (const icon of icons) {
					icon.remove();
				}
			}

			function remove(e) {
				const id = e.dataset.id,
					datasource = components[ds];

				if (datasource.remove(id)) {
					deleteIcon(id);
				}
			}

			function getParent(e) {
				const parent = e.parentNode,
					id = parent.dataset.id || null;
				if (!id) {
					return console.log("Id not exist on parent elem!");
				}
				return getDOM(`div.icon-text[data-id="${id}"]`);
			}

			function getDOM(selector) {
				return document.body.querySelector(selector);
			}

			function createNew(e) {
				const [id, container, type] = e.dataset.extra.split('/'),
					time = Math.round(+new Date() / 1000),
					icons = {
						dir: "folder",
						html: "file"
					},
					datasource = components[ds];

				const newItem = {
					name: "New Folder",
					id: guid(),
					description: "This is a new folder",
					icon: icons[type],
					type: type,
					readonly: false,
					onstartmenu: false,
					ondesktop: id == -1,
					createtime: time,
					lastmodify:1503812702,
				}

				if (datasource.add([newItem], id)) {
					CreateDesktopIcon(newItem, getContainer(container), true);
				}
			}

			function paste(e) {
				const [targetId, container, targetType] = e.dataset.extra.split('/'),
					time = Math.round(+new Date() / 1000),
					icons = {
						dir: "folder",
						html: "file"
					},
					datasource = components[ds],
					clipboard = components[relationship.clipboard],
					items = clipboard.getItems();
				let containerDOM,
					newWindow;
				if (!clipboard.getItems()) {
					return console.log("Clipboard is empty");
				}
				if (targetType == "free") {
					containerDOM = getContainer(container)
					if (!containerDOM) {
						return console.log("Container not exist!");
					}
					newWindow = targetId == -1 ? true : false;
				}

				for (let [sourceType, itemId, remove] of items) {
					if (sourceType == "fs") {
						remove = remove == "true";
						const item = datasource.copyItem(targetId, itemId, remove);
						if (item && targetType == "free") {
							CreateDesktopIcon(item, containerDOM, newWindow);
							if (remove) {
								deleteIcon(itemId);
							}
						}
					}
				}
				clipboard.clear()
			}
			function close(win) {
				const len = windows.length;
				let i = 0;
				for (; i < len; i++) {
					if (windows[i].id == win.id) {
						return windows.splice(i, 1);
					}
				}
			}

			function toggleFullscreen() {
				fullScreen = !fullScreen;
				const icon = launcherBar.querySelector(`[data-click="${cName}.launch"] img`),
					imgName = 'fullscreen_' + +fullScreen+'.png';
				if (!fullScreen) {
					if(document.exitFullscreen) {
						document.exitFullscreen();
					} else if(document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if(document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					}
				} else {
					const e = document.documentElement;
					if(e.requestFullscreen) {
						e.requestFullscreen();
					} else if(e.mozRequestFullScreen) {
						e.mozRequestFullScreen();
					} else if(e.webkitRequestFullscreen) {
						e.webkitRequestFullscreen();
					} else if(e.msRequestFullscreen) {
						e.msRequestFullscreen();
					}
				}
				icon.src = './img/startmenu/'+imgName;
			}

			function link(e, ev) {
				const el = document.createElement('textarea');
				let loc = location.href.split("#"),
					link = loc[0] + "#" + e.dataset.extra || "";
				el.value = link;
				document.body.appendChild(el);
				el.select();
				document.execCommand('copy');
				el.remove();
				alert("Url was copied into clipboard!");

			}

			return {
				close(win) {
					close(win);
				},
				createNew(e, ev) {
					createNew(e);
				},
				createMenu(e, ev) {
					createMenu(e, ev);
				},
				createIcon(item, container, newWindow) {
					CreateDesktopIcon(item, container, newWindow);
				},
				deleteIcon(id) {
					deleteIcon(id);
				},
				launch(e, ev) {
					toggleFullscreen();
				},
				link(e, ev) {
					link(e, ev);
				},
				paste(e, ev) {
					paste(e);
				},
				properties(e, ev) {
					start(e, ev);
				},
				toggleRename(e) {
					toggleRename(getParent(e));
				},
				remove(e) {
					remove(getParent(e));
				},
				init(list) {
					init(list);
				}
			}
		},

		startMenuManager(settings, shared = false) {
			const taskbar = document.body.querySelector('footer#taskbar'),
				{ blurable } = shared,
				cName = settings.constructorName,
				ds = settings.relationship.datasource;
			let startMenu, selected = false;

			const template = {
				startMenu(itemList) {
					const [mainList, subList] = template.createList(itemList);
					return `<div class="start-menu no-select">
						<div class="start-menu-title">
							<h3> Welcome Guest! </h3>
						</div>
						<div class="sub-item-list">
							${subList}
						</div>
						<div class="main-item-list">
							<ul>${mainList}</ul>
						</div>
					</div>`;
				},
				createList(itemList) {
					let mainList = "",
						subList = "";
					for (const item of itemList) {
						mainList += template.mainList(item);
						subList += template.subList(item);
					}
					return [mainList, subList];

				},
				mainList(item) {
					return `<li data-click="${cName}.select" data-extra="${item.id}" title="${item.name}">
							<img src="./img/startmenu/${item.icon}.png" width="22" height="22"> ${item.name}
						</li>`;
				},
				subList(item) {
					if (!item.child) {
						return "";
					}
					return `<ul class="d-none" data-item-id="${item.id}">
						${item.child.map(item => template.subItem(item)).join("")}
					</ul>`;
				},
				subItem(item) {
					return `<li data-click="${ds}.execute" data-id="${item.id}" data-new="true" data-type="startSubIcon" data-container="-1" title="${item.name}">
							<img src="./img/startmenu/${item.icon}.png"> ${item.name}
						</li>`;
				}
			}


			function init(list) {
				taskbar.insertAdjacentHTML('afterbegin', template.startMenu(list));
				startMenu = taskbar.querySelector('.start-menu');
				blurable(startMenu, blurCb);
				select(list[0].id);
			}

			function blurCb(ev) {
				startMenu.classList.remove('show');
			}

			function toggleList(id) {
				const main = startMenu.querySelector(`li[data-click="${cName}.select"][data-extra="${id}"]`);
				if (main) {
					main.classList.toggle('active');
				}
				const sub = startMenu.querySelector(`ul[data-item-id="${id}"]`);
				if (sub) {
					sub.classList.toggle('d-none');
				}
			}

			function select(id) {
				if (selected) {
					toggleList(selected);
				}
				toggleList(id);
				selected = id;
			}

			return {
				select(e) {
					select(e.dataset.extra);
				},
				toggle() {
					startMenu.classList.toggle('show');
					startMenu.focus();
				},
				remove() {

				},
				init(list) {
					init(list);
				}
			}
		},

		fileSystem(settings, shared = false) {
			const {req, components, guid, objClone, assoc} = shared,
				relationship = settings.relationship;
			let vfs;

			if (localStorage.getItem('vfs')) {
				vfs = JSON.parse(localStorage.getItem('vfs'));
				init();
			} else {
				req("json", "vfs", d => {
					vfs = d;
					init();
				}, 'json' );
			}

			function init() {
				const hash = location.hash ? location.hash.substr(1) : false;
				let desktopItems = [],
					startMenuItems = [],
					item;
				for (item of vfs.child) {
					if (item.ondesktop) {
						desktopItems.push(item);
					}
					if (item.onstartmenu) {
						startMenuItems.push(item);
					}
				}

				if (desktopItems.length) {
					components[relationship.desktop].init(desktopItems);
				}

				if (startMenuItems.length) {
					components[relationship.startmenu].init(startMenuItems);
				}

				if (hash) {
					item = searchInVfs(vfs.child, hash);
					if (item) {
						const e = {
							dataset: {
								container: -1,
								id: item.id,
								type: "free",
								new: "true"
							}
						}
						openItem(item, e);
					}
				}
				console.log(hash);
			}

			function searchInVfs(items, id) {
				let e, item;
				for (item of items) {
					if (item.id == id) {
						item.path = [];
						item.parent = [];
						return item;
					}
					if (item.child) {
						e = searchInVfs(item.child, id);
						if (e && e.id == id) {
							e.path.push(item.id);
							e.parent.push(item.name);
							return e;
						}
					}
				}
				return null;
			}

			function deleteItem(items, id) {
				let i, max = items.length;
				for (i = 0; i < max; i++) {
					if (items[i].id == id) {
						items.splice(i, 1);
						save();
						return true;
					}
					if (items[i].child) {
						if (deleteItem(items[i].child, id) === true) {
							return true;
						};
					}
				}
				return null;
			}

			function add(items, to) {
				let target = to == -1 ? vfs : searchInVfs(vfs.child, to);
				if (!target) {
					return false;
				}
				if (!target.child) {
					target.child = [];
				}
				target.child.push(...items);
				save();
				return true;
			}

			function save() {
				localStorage.setItem('vfs', JSON.stringify(vfs))
				return true;
			}

			function prepareItems(items, remove) {
				let i, max = items.length;
				for (i = 0; i < max; i++) {
					items[i].id = guid();
					if (!remove) {
						items[i].name = items[i].name + " copy";
					}
					if (items[i].child) {
						prepareItems(items[i].child, remove);
					}
				}
				return null;
			}

			function prepareItem(item, remove) {
				if (Array.isArray(item)) {
					return prepareItems(item, remove);
				}

				item.id = guid();
				if (!remove) {
					item.name = item.name + " copy";
				}

				if (item.child && item.child.length > 0) {
					return prepareItems(item.child, true);
				}
				return;
			}

			function copyItem(targetId, sourceId, removeItem = false) {
				const sourceItem = searchInVfs(vfs.child, sourceId);
				if (!sourceItem) { return null; }
				const itemCopy = objClone(sourceItem);
				if (targetId == -1) {
					itemCopy['ondesktop'] = true;
				}
				prepareItem(itemCopy, removeItem);
				if (!add([itemCopy], targetId)) {
					return false;
				};
				if (removeItem) {
					deleteItem(vfs.child, sourceId);
				}
				return itemCopy;
			}

			function openItem(item, e = {}, ev = {} ) {
				if (!item) {
					return;
				}
				const app = components[assoc[item.type] || "-"] || false;

				if (!item) {
					return console.log("File corrupt or not exist anymore!");
				} else if (item.url && item.type == "url") {
					window.open (item.url,"mywindow");
				} else if (item.text && item.type == "alert") {
					alert(item.text);
				} else if (!app || !app.open) {
					return console.log("Not exist associated application!");
				}
				app.open(e, ev);
			}

			function execute(e, ev) {
				const id = e.dataset.id;
				if (!id) {
					return console.log("This file not have id!");
				}
				openItem(searchInVfs(vfs.child, id), e, ev);
			}

			return {
				add(items, to) {
					return add(items, to);
				},
				copyItem(targetId, sourceId, removeItem = false) {
					return copyItem(targetId, sourceId, removeItem);
				},
				execute(e, ev) {
					execute(e, ev);
				},
				get(id) {
					return searchInVfs(vfs.child, id);
				},
				getDatabase() {
					return vfs;
				},
				search(items, id) {
					return searchInVfs(items, id);
				},
				remove(id) {
					return deleteItem(vfs.child, id)
				},
				save() {
					return save();// save into localstorage
				}
			}
		},

		fileExplorer(settings, shared = false) {

			const { components } = shared,
				{ datasource: ds, window, desktop: icon } = settings.relationship;

			const template = {
				addressbar(item, options) {
					const {cont, itemId, newWin} = options;
					return `<div class="addressbar">
								<span class="home">
									<img src="./img/app/home.png">
								</span>
								<span class="up">
									<img src="./img/app/up.png">
								</span>
								<nav>
									<ul></ul>
								</nav>
							</div>`;
				}
			}

			let windows = [];

			function addNavLink(win, item) {
				const label = item.parent,
					path = item.path,
					len = label.length;
				let i = 0, li;
				win.nav.innerHTML = "";
				win.nav.append(document.createElement("li"));
				if (len > 0) {
					label.reverse();
					path.reverse();

					for (;i < len; i++) {
						li = document.createElement("li");
						updateTargetData(li, path[i], win.id);
						li.textContent = label[i];
						win.nav.append(li);
					}
				}
				li = document.createElement("li");
				li.textContent = item.name;
				win.nav.append(li);
			}

			function createNewWindow(item, d) {
				const options = {
					data: d,
					appClass: settings.windowClass,
					windowSize: settings.windowSize,
					title: settings.name,
					subTitle: "- "+item.name,
					source: settings.constructorName,
					icon: item.icon,
					randomPosition: settings.randomPosition,
					afterHeader: template.addressbar(
						item, {
							cont: d.container,
							itemId: d.id,
							newWin: d.new
						}
					),
				};
				return components[window].register(options);
			}

			function updateContent(item, d, win) {
				const items = item.child || [],
					desktop = components[icon];
				for(const itm of items) {
					desktop.createIcon(itm, win.body, false);
				}
			}

			function updateTargetData(e, itemId, winId) {
				e.dataset.id = itemId;
				e.dataset.container = winId;
				e.dataset.new = false;
				e.dataset.click = `${ds}.execute`;
			}

			function open(e, ev) {

				const d = e.dataset,
					newWin = (d.new || false) === "true";
				let win;
				if (!d.container || !d.id) {
					return console.log('Cannot execute, insufficient information!');
				}
				const item = components[ds].get(d.id);
				if (!item) {
					return console.log('File or folder not exist!');
				}

				if (windows.length >= settings.maxProc && d.new) {
					return console.log('Too much opened window, cannot open more!');
				}

				if (newWin) {
					win = createNewWindow(item, d);

					if (!win) {
						return console.log("Failed to create new file explorer window!");
					}
					win.up = win.dom.querySelector('.up');
					win.home = win.dom.querySelector('.home');
					win.nav = win.dom.querySelector('.addressbar nav ul');
					win.h4 = win.dom.querySelector('.header h4');
					win.body.dataset.type = "free";
					win.body.dataset.container = win.id;
					win.body.dataset.contextmenu = "desktopManager.createMenu";
					shared.createDropTarget(win.body);
					windows.push(win);
				} else if (d.container != "-1") {
					win = components[window].getWindow(d.container);
					if (!win) {
						return console.log("File Explorer window not exist!");
					}
					win.body.innerHTML = "";
				}
				win.h4.dataset["afterText"] = "- " + item.name;
				addNavLink(win, item);
				win.body.dataset.itemId = item.id;
				updateTargetData(win.home, item.path[0] || item.id, win.id)
				updateTargetData(win.up, item.path.slice(-1)[0] || item.id, win.id)
				updateContent(item, d, win);
			}

			function close(win) {
				const len = windows.length;
				let i = 0;
				for (; i < len; i++) {
					if (windows[i].id == win.id) {
						return windows.splice(i, 1);
					}
				}
			}

			return {
				close(win) {
					close(win);
				},
				open(e, ev) {
					open(e, ev);
				},
				remove() {

				}
			}
		},

		windowManager(settings, shared = false) {
			const { guid, components } = shared,
				taskMName = settings.relationship.task,
				cName = settings.constructorName,
			 	template = {
					window(settings) {
						const {
							id,
							appClass = [""],
							title = "",
							subTitle = "",
							afterHeader = "",
							afterContent = "",
							content = ""
						} = settings;
						return `<div class="container">
									<div class="header no-select">
										<h4 data-after-text="${subTitle}">
											${title}
										</h4>
										<div class="minimize" data-click="${cName}.minimize" data-id="${id}">_</div>
										<div class="close" data-click="${cName}.close" data-id="${id}">✖</div>
									</div>
									${afterHeader}
									<div class="content" data-id="${id}">${content}</div>
									${afterContent}
								</div>`;
					}
				},
				focusedZ = 3,
				normalZ = 2;

			let windows = {}, focusedId;

			function getNewId() {
				let newId = guid();
				if (!windows['win_'+newId]) {
					return newId;
				}
				return getNewId();
			};


			function dragdrop(e1, e2 = null) {
				e1 = typeof e1 === "string" ? document.body.querySelector(e1) : e1;
				e2 = typeof e2 === "string" ?  document.body.querySelector(e2 || e1) : e2;
				e2.addEventListener('mousedown', dragHandler);
				let body = document.body,
					html = document.documentElement,
					eWidth = e1.offsetWidth,
					eHeight = e1.offsetHeight,
					mWidth = Math.max(body.offsetWidth, html.offsetWidth)-eWidth,
					mHeight =  Math.max(body.offsetHeight, html.offsetHeight)-eHeight,
					cX, cY, x, y, pos = e1.style.position,
					shiftX, shiftY;

				e1.style.position = 'fixed';

				function move(x, y) {
					e1.style.left = x+'px';
					e1.style.top = y+'px';
				}

				function mousemove (e) {
					x = e.clientX-shiftX;
					y = e.clientY-shiftY;
					cX = x >  mWidth ? mWidth : x < 0 ? 0 : x;
					cY = y >  mHeight ? mHeight : y < 0 ? 0 : y;
					move(cX, cY);
				}

				function mouseup (e) {
					body.removeEventListener('mousemove', mousemove);
					window.removeEventListener('mouseup', mouseup);
					body.removeEventListener('mouseup', mouseup);
					e2.addEventListener('mousedown', dragHandler);
					e1.dataset.move = "false";
					if (e1.dataset.id && e1.classList.contains('window')) {
						focus(e1.dataset.id);
					}
					//e.preventDefault();
				}

				function dragHandler(e){
					const { width, height } = e1.style,
						{ move = "false", id = false } = e1.dataset;
					if (move == "true" || width == "100%" || height == "100%")  {
						return;
					}
					if (id && e1.classList.contains('window')) {
						focus(id);
					}
					body.addEventListener('mousemove', mousemove);
					// use window => mouse could be released when pointer isn't over the body
					window.addEventListener('mouseup', mouseup);
					e1.dataset.move = "true";
					shiftX = e.clientX - e1.offsetLeft;
					shiftY = e.clientY - e1.offsetTop;
				}

			}

			function customizeWindow(dom, options) {
				const  winSize = options.windowSize || {};
				let width, height;
				if (winSize.full) {
					width = "100%";
					height = "calc(100% - 34px)";
					dom.style.top = '0px';
					dom.style.left = '0px';
				} else if (options.randomPosition) {
					const body = document.body,
						{
							minW = 400,
							minH = 200,
							maxW = 800,
							maxH = 400
						} = options.windowSize || {},
						limitX = body.offsetWidth,
						limitY = body.offsetHeight - 33,
						maxX = Math.min(limitX, maxW),
						maxY = Math.min(limitY, maxH);
					width = Math.floor(Math.random() * (maxX - minW) + minW) + 'px';
					height = Math.floor(Math.random() * (maxY - minH) + minH) + 'px';
					dom.style.top = Math.random() * (limitX - width) + 'px';
					dom.style.left = Math.random() * (limitY - height) + 'px';
				}
				dom.style.width = width;
				dom.style.height = height;
			}

			function create(options) {
				const id = getNewId(),
					dom = document.createElement("div")
					task = components[taskMName];
				options.id = id;
				options.status = true;
				dom.innerHTML = template.window(options);
				dom.id = "win_" + options.id;
				dom.dataset.id = options.id;
				dom.dataset.click = cName+".focus";
				dom.classList.add('window', ...(options.appClass || []));
				const cont = dom.querySelector(settings.contentSelector);
				options.dom = dom;
				options.header = dom.querySelector(".header");
				options.body = cont;
				dragdrop(options.dom, options.header);
				windows[id] = options;
				document.body.append(dom);
				customizeWindow(dom, options);
				task.add(options);
				focus(id);
				if (shared.taskPanel) {
					shared.taskPanel.addToList(options);
				}
				return options;
			}

			function minimize(id) {
				const win = windows[id];
				if (!win) { return console.log('Window not found'); }
				win.status = !win.status;
				win.dom.classList.toggle('minify');
				unfocus(id);
				focusedId = null;
			}

			function close(e) {
				const id = e.dataset.id,
					win = windows[id],
					task = components[taskMName];
				if (!win) { return console.log('Window not found'); }
				if (shared.taskPanel) {
					shared.taskPanel.removeFromList(win);
				}
				components[win.source].close(win);
				win.dom.remove();
				task.close(windows[id]);
				delete windows[id];
			}

			function unfocus(id) {
				if (windows[id]) {
					windows[id].dom.style.zIndex = normalZ;
					components[taskMName].unfocus(windows[id]);
				}
				focusedId = null;
			}

			function focus(id = false) {
				if (!id) {
					return;
				}

				unfocus(focusedId);

				if (windows[id] && focusedId != id) {
					if (!windows[id].status) {
						minimize(id);
					}
					windows[id].dom.style.zIndex = focusedZ;
					focusedId = id;
					components[taskMName].focus(windows[id]);
				}
			}

			return {
				close(options) {
					close(options);
				},
				focus(e, ev) {
					const id = typeof e != "object" ? e : e.dataset.id;
					focus(id, status);
				},
				minimize(e, ev) {
					ev.preventDefault();
					minimize(e.dataset.id);
				},
				getWindow(id = false) {
					return !id ? windows : windows[id] || null;
				},
				register(options) {
					return create(options);
				},
				remove() {

				}
			}
		},

		launchBar(settings, shared = false) {
			const { guid, components, blurable } = shared,
				cName = settings.constructorName,
				container = document.body.querySelector(settings.container),
				toggleButton = document.body.querySelector(settings.toggle),
				template = {
					icon(appData) {
						return `<figure class="btn-task" data-click="${appData.constructorName}.launch" title="${appData.description}">
								<img class="mini-icon" src="img/startmenu/${appData.icon}.png">
							</figure>`;
					}
				};

			if (toggleButton) {
				toggleButton.dataset.click = `${settings.constructorName}.toggle`;
				blurable(container, blurCb);
			}

			function blurCb(ev) {
				toggle(ev.target, "remove");
			}

			function add(appData) {
				if (!container) {
					return console.log("Missing launchbar container");
				}
				container.insertAdjacentHTML('beforeend', template.icon(appData));
			}

			function toggle(e, type = "toggle") {
				container.classList[type]('d-iblock');
				container.focus();
			}

			return {
				add(appData) {
					add(appData);
				},
				toggle(e, v) {
					toggle(e);
				},
				unpin() {
					// remove it
				},
				remove() {

				}
			}
		},

		taskManager(settings, shared = false) {
			const { guid, components, blurable } = shared,
				{ launch, window } = settings.relationship,
				container = document.body.querySelector(settings.container),
				group = container.querySelector(settings.group),
				cName = settings.constructorName,
				template = {
					taskGroupBtn(options) {
						const { id, icon, title, subTitle = "", source: group } = options;
						return `<figure class="btn-task btn-group" data-click="${cName}.toggle" data-id="${id}" data-group=${group} data-contextmenu="${cName}.createMenu" title="${title}">
									<img class="mini-icon" src="img/startmenu/${icon}.png">
									<figcaption class="btn-text d-none d-md-iblock">${title}</figcaption>
									<div class="d-none" data-sub-group="${group}"></div>
								</figure>`;
					},
					taskBtn(options) {
						const { id, icon, title, subTitle = "", source: group } = options
							headerTitle = subTitle.length > 1 ? subTitle.substr(2) : title;
						return `<figure class="btn-task" data-click="${window}.focus" data-id="${id}" data-group=${group} title="${title} ${subTitle}">
									<img class="mini-icon d-none d-md-iblock" src="img/startmenu/${icon}.png">
									<figcaption class="btn-text">${headerTitle}</figcaption>
									<div data-sub-group="${group}"></div>
								</figure>`;
					},
					killBtn(id, group) {
						return `<div class="close" data-click="${window}.close" data-id="${id}" data-group="${group}">✖</div>`;
					},
					runningTaskHeader() {
						const header = {
							name: "Task",
							id: "ID",
							action: "Kill"
						};
						return template.runningTasks(header);
					},
					taskLine(obj) {
						return template.runningTasks(obj);
					},
					runningTaskList(objList) {
						if (!objList) { return ""; }
						const header = template.runningTaskHeader();
						let body = [];
						for (const key in objList) {
							console.log(objList);
							const id = key,
								o = objList[key];
							body.push(template.taskLine({
								name: o.title +" "+ (o.subTitle || ""),
								id: id,
								group: o.source || "",
								action: template.killBtn(id, o.source)
							}));

						}

						return header + body.join('');
					},
					runningTasks(d) {
						if (!d.action) {
							d.action = template.killBtn(d.id, d.group);
						}
						return `
						<div class="row" data-group="${d.group}" data-id="${d.id}">
							<div class="cell" data-type="name"> ${d.name} </div>
							<div class="cell" data-type="id" title="${d.id}">${d.id.substr(0, 8)}</div>
							<div class="cell" data-type="action">${d.action}</div>
						</div>`;
					}
				},
				focusClass = settings.focusClass;

			let taskGroup = {}
				selectedGroup = null,
				windows = null;

			function createNewWindow() {
				const options = {
					data: false,
					appClass: settings.windowClass,
					title: settings.name,
					source: settings.constructorName,
					icon: settings.icon,
				};
				return components[window].register(options);
			}

			function getGroupTask(group, id = false) {
				let selector = `.row[data-group="${group}"]`;
				if (id) {
					selector += `[data-id="${id}"]`;
				}
				return windows.body.querySelectorAll(selector);
			}

			function addToList(options) {
				const {
						source: group,
						id = false,
						title,
						subTitle = ""
					} = options,
				 	doms = getGroupTask(group, id),
					taskOption = {
						group,
						id,
						name: title +" "+ subTitle
					};
				windows.body.insertAdjacentHTML('beforeend', template.taskLine(taskOption));
			}

			function removeFromList(options) {
				const { source: group, id = false } = options,
					doms = getGroupTask(group, id);
				if (doms.length) {
					for (const dom of doms) {
						dom.remove();
					}
				}
			}

			function start(e, ev) {
				ev.preventDefault();
				if (windows) {
					return components[window].focus(windows.id);
				}

				let win = createNewWindow();
				if (!win) {
					return console.log("Failed to create new window!");
				}
				win.body.innerHTML = template.runningTaskList(components[window].getWindow());
				windows = win;
				win.addToList = addToList;
				win.removeFromList = removeFromList;
				shared.taskPanel = win
			}

			function getSubContainer(groupId) {
				return group.querySelector(`[data-sub-group="${groupId}"]`);
			}

			function create(options, type) {
				const { id, source: groupId} = options;
				if (type == "main") {
					taskGroup[groupId] = { child: {} };
					group.insertAdjacentHTML('beforeend', template.taskGroupBtn(options));
					taskGroup[groupId]['dom'] = group.lastChild;
					taskGroup[groupId]['subGroup'] = group.lastChild.querySelector(`[data-sub-group="${groupId}"]`);
					blurable(group.lastChild, blurCb);
				}

				const subContainer = getSubContainer(groupId);
				subContainer.insertAdjacentHTML('beforeend', template.taskBtn(options));
				options.btn = subContainer.lastChild;
				taskGroup[groupId]['child'][id] = options;
			}

			function blurCb(e) {
				toggle(e.target, "add");
			}

			function add(options) {
				const { id, source: groupId} = options;
				create(options, !taskGroup[groupId] ? "main" : false);
			}

			function close(options) {
				const { id, source: groupId} = options;
				if (groupId == cName) {
					shared.taskPanel = null;
					windows = null;
				}
				if (!taskGroup[groupId]) { return; }
				taskGroup[groupId]['child'][id].btn.remove();
				delete taskGroup[groupId]['child'][id];
				if (Object.keys(taskGroup[groupId].child).length == 0) {
					taskGroup[groupId].dom.remove();
					delete taskGroup[groupId];
				}
			}

			function focus(win, select = false) {
				const { id, source: groupId} = win;
				if (taskGroup[groupId] && taskGroup[groupId]['child'][id]) {
					const taskBtn = taskGroup[groupId]['child'][id];
					taskBtn.btn.classList[select ? 'add' : 'remove'](focusClass);
				}
			}

			function toggle(e, type = "toggle") {
				const {id, group} = e.dataset;
				taskGroup[group].subGroup.classList[type]('d-none');

				if (!selectedGroup) {
					selectedGroup = id;
					return;
				}
			}

			function createMenu(e, ev) {
				const { id, group = false, type = "icon" } = e.dataset,

					list = [
						["New Folder", cName, "createNew", [targetId, container, 'dir']],
						["New File", cName, "createNew", [targetId, container, 'html']],
						["Paste", cName, "paste", [targetId, container, type]],
					//	["Arrange Icon", relationship.clipboard, "addItems", ['fs', id, 'true']],
						["Terminal", cName, "remove", [targetId]],
						["Settings", cName, "toggleRename", [targetId]],
						["Properties", cName, "details", [targetId]],
					];

					if (isEmpty(clipboard.getItems())) {
						list.splice(2, 1);
					}


				if (list) {
					menu.create(ev, list, targetId );
				}
			}

			return {
				focus(win) {
					focus(win, true);
				},
				unfocus(win, select = false) {
					focus(win, false);
				},
				close(options) {
					close(options);
				},
				createMenu(e, ev) {
					createMenu(e, ev);
				},
				add(options) {
					add(options);
				},
				launch(e, ev) {
					start(e, ev);
				},
				remove() {

				},
				toggle(e, ev) {
					toggle(e);
				},
			}
		},

		audioManager(settings, shared = false) {
			const { guid, components, blurable } = shared,
				{ launch } = settings.relationship
				template = {
					volumeBar(volume) {
						return `Volume: <span class="amount">${volume}</span>%<br>
							<input min="0" max="100" value="${volume}" step="5" type="range">`;
					}
				},
				sounds = {
					click: new Audio("audio/click.mp3"),
					close: new Audio("audio/close.mp3")
				};
			let volume = localStorage.getItem('volume') || 20,
				dom = null;

			function toggle(e, ev) {
				dom.classList.toggle('d-none');
				dom.style.left = (ev.clientX - dom.offsetWidth/2)+"px";
				dom.value.focus();
			}

			(function init(){
				dom = document.createElement("div");
				dom.innerHTML = template.volumeBar(volume);
				dom.classList.add("volume-control", "d-none");
				dom.amount = dom.querySelector(".amount");
				dom.value = dom.querySelector("input");
				dom.value.onchange = updateVolume;
				dom.value.onblur = blurCb;
				document.body.append(dom);
			})();

			function blurCb(ev) {
				toggle(ev.target, ev)
			}

			function updateVolume(e) {
				const v = e.target.value;
				e.preventDefault();
				dom.amount.textContent = v;
				volume = v;
				localStorage.setItem('volume', v);
			}

			function play(name) {
				if (!sounds[name]) {
					return;
				}
				sounds[name].volume = volume / 100;
				sounds[name].play();
			}

			return {
				launch(e, ev) {
					toggle(e, ev);
				},
				play(name) {
					play(name);
				},
				remove() {

				}
			}
		},

		displayManager(settings, shared = false) {
			const { guid, components } = shared,
				{ window } = settings.relationship,
				cName = settings.constructorName,
				bgImage = document.body.querySelector(".background-image"),
				bgColor = document.body.querySelector(".background-gradient"),
				template = {
					window() {
						const s = screen,
							b = document.body,
							d = document.querySelector('.desktop-container'),
							c = configs;
						return `<div class="desktop-details">
									<div class="desktop-previews">
										<div class="mini-preview" data-type="image"></div>
										<div class="mini-preview" data-type="color"></div>
									</div>
									<div class="desktop-info">
										<p>Screen Size:</p><span>${s.width} x ${s.height}</span>
										<p>Window Size:</p><span>${b.offsetWidth} x ${b.offsetHeight}</span>
										<p>Desktop Size:</p><span>${d.offsetWidth} x ${d.offsetHeight}</span>
									</div>
									<div class="btn-group">
										<button data-click="${cName}.apply">Apply</button>
									</div>
								</div>

								<div class="grid-column-2 desktop-options">
									<p>Color:</p>
									<p>
										<input name="startColor" value="${c.startColor}" type="color">
										<input name="endColor" value="${c.endColor}" type="color">
									</p>
									<p>Alpha:</p>
									<p>
										<input name="colOpacity" min="0" max="100" value="${c.colOpacity}" type="number">
									</p>
									<p>Direction:</p>
									<p>
										<input name="colDegree" value="${c.colDegree}" min="-180" max="180" step="5" type="number"> deg
									</p>
									<p>Image:</p>
									<p>
										<select name="bgImage">${template.options(options.background)}</select>
									</p>
									<p>Position:</p>
									<p>
										<select name="bgPosition">${template.options(options.position)}</select>
									</p>
									<p>Size:</p>
									<p>
										<input name="bgWidth" value="${c.bgWidth}" min="0" type="number">%,
										<input name="bgHeight" value="${c.bgHeight}" min="0" type="number">%
									</p>
									<p>Repeat:</p>
									<p>
										<select name="bgRepeat">${template.options(options.repeat)}</select>
									</p>
									<p>Opacity:</p>
									<p>
										<input name="bgOpacity" type="number" min="0" max="100" value="${c.bgOpacity}"> %
									</p>
								</div>`;
					},
					options(list) {
						const sv = [configs.bgRepeat, configs.bgImage, configs.bgPosition];
						return list.map(o => {
							sv.indexOf(o[0])
							return `<option value="${o[0]}" ${sv.indexOf(o[0]) > -1 ? "selected" : ""}>${o[1]}</option>`
						}).join('');
					},
					color(settings) {
						const { colDegree, startColor, endColor } = settings;
						return `linear-gradient(${colDegree}deg, ${startColor}, ${endColor})`;
					},
					background(settings) {
						const {
							bgPosition,
							bgRepeat,
							bgImage,
						} = settings;

						if (!bgImage) {
							return "";
						}
						return `url("img/background/${bgImage}") ${bgRepeat} ${bgPosition}`;
					},
				},
				options = {
					position: [
						["center center","Center Center"],
						["center top","Center Top"],
						["center bottom","Center Bottom"],
						["left top","Left Top"],
						["left center","Left Center"],
						["left bottom","Left Bottom"],
						["right top","Right Top"],
						["right center","Right Center"],
						["right bottom","Right Bottom"],
					],
					repeat: [
						["no-repeat","Not repeat"],
						["repeat","Repeat"],
						["repeat-x","Horizontal"],
						["repeat-y","Vertical"],
					],
					background: [
						["","No image"],
						["bg1.jpg","Default"],
						["bg2.jpg","Dot Land"],
						["bg3.jpg","Flying Points"],
						["bg4.jpg","The Colors"],
						["bg5.jpg","Universe"],
						["bg6.jpg","Sunrise in Space"],
						["bg7.jpg","Red Blue Lines"],
						["bg8.jpg","Sun Rise and Flower Field"],
						["bg9.jpg","The Earth"],
						["bg10.jpg","Earth and Moon from Sky"],
						["bg11.jpg","Mountain Spring"],
						["cloud1.png","Rain Cloud"],
						["cloud2.png","Cloud"],
						["man.gif","Man right ani"],
						["smile.gif","Smile ani"],
						["matrix1.gif","Matrix ani"],
						["matrix2.gif","Matrix ani"]
					]
				};

			let windows = null,
				inputs = null,
				previewImg,
				previewCol,
				configs;

			function createNewWindow() {
				const options = {
					data: false,
					appClass: settings.windowClass,
					title: settings.name,
					source: settings.constructorName,
					icon: settings.icon,
				};

				return components[window].register(options);
			}

			function loadconfigs() {
				const ls = localStorage.getItem('desktopConfig') || false;
				if (ls) {
					configs = JSON.parse(ls);
				} else {
					configs = {
						"bgHeight": "100",
						"bgImage": "bg9.jpg",
						"bgOpacity": "100",
						"bgPosition": "center center",
						"bgRepeat": "no-repeat",
						"bgWidth": "100",
						"colDegree": "135",
						"colOpacity": "0",
						"endColor": "#ffffff",
						"startColor": "#0000ff"
					};
				}
			}

			(function init() {
				loadconfigs();
				backgroundChanges(bgColor, bgImage, configs);
			})();

			function start(e, ev) {
				ev.preventDefault();
				if (windows) {
					return components[window].focus(windows.id);
				}

				let win = createNewWindow();
				if (!win) {
					return console.log("Failed to create new window!");
				}
				win.body.innerHTML = template.window();
				windows = win;
				previewImg = win.dom.querySelector(`.mini-preview[data-type="image"]`);
				previewCol = win.dom.querySelector(`.mini-preview[data-type="color"]`);
				inputs = windows.dom.querySelectorAll("select, input");
				for(const input of inputs) {
					input.oninput = applyChanges;
				}
				applyChanges(false);
			}

			function getInputValues() {
				const data = {};
				if (inputs.length) {
					for(const input of inputs) {
						data[input.name] = input.value;
					}
				}
				return data;
			}

			function applyChanges(apply = false) {
				const settings = getInputValues();
				if (apply === true) {
					backgroundChanges(bgColor, bgImage, settings);
					localStorage.setItem('desktopConfig', JSON.stringify(settings))

				}
				if (!previewImg || !previewCol) {
					return console.log("Not exist preview box");
				}
				backgroundChanges(previewCol, previewImg, settings);
			}

			function backgroundChanges(e1, e2, settings) {
				e1.style.background = template.color(settings);
				e1.style.opacity = settings.colOpacity / 100;
				e2.style.background = template.background(settings);
				e2.style.opacity = settings.bgOpacity / 100;
				e2.style.backgroundSize = `${settings.bgWidth}% ${settings.bgHeight}%`;
			}

			function close(e) {
				windows = null;
			}

			return {
				apply(e, ev) {
					applyChanges(true);
				},
				close(e, ev) {
					close(e);
				},
				launch(e, ev) {
					start(e, ev);
				},
				remove() {

				}
			}
		},

		terminal(settings, shared = false) {
			const { guid, components, req } = shared,
				{ window, datasource: ds } = settings.relationship,
				template = {
					afterHeader() {
						return `<div class="overlay-terminal"></div>`;
					},
					afterContent() {
						return `<div class="footer">
							<span class="bash-prefix">root@root-desktop:~$</span>
							<input name="cmd" type="text" value="">
						</div>`;
					},
					comment(text) {
						return `<font color='gray'>${text}</font>${LINE_BREAK}`;
					},
				},
				ENTER = 13,
				LINE_BREAK = "<br \>";

			let windows = [];

			function createNewWindow() {
				const options = {
					data: false,
					appClass: settings.windowClass,
					title: settings.name,
					source: settings.constructorName,
					windowSize: settings.windowSize,
					randomPosition: settings.randomPosition,
					afterHeader: template.afterHeader(),
					afterContent: template.afterContent(),
					icon: settings.icon,
				};
				return components[window].register(options);
			}

			function start(e) {
				if (windows.length >= settings.maxProc) {
					return console.log('Too much opened window, cannot open more!');
				}
				let win = createNewWindow();
				if (!win) {
					console.log("Failed to create new window!");
					return false;
				}
				windows.push(win);
				const input = win.dom.querySelector(`input[name="cmd"]`);
				win.input = input;
				input.container = win.body;
				input.onkeyup = sendCommand;
				input.focus();
				return win;
			}

			function sendCommand(ev) {
				const e = ev.target;
				ev.preventDefault();
				if (ev.which == ENTER){
					addToContainer(e.container, e.value);
					e.value = "";
		        }
			}

			function open(e, ev) {
				const {
					id = false,
					container = false,
				} = e.dataset;
				let win = start(e);
				if (!win || !container || !id) {
					return false;
				}
				const item = components[ds].get(id);
				if (!item || !item.url) {
					return console.log('Corrupt shell file or not exist the physical file!');
				}


				const callbackData = {
					input: win.input,
					container: win.input.container
				};
				req ("file", item.url, loadFileContent, "json", callbackData);
				win.h4 = win.dom.querySelector('.header h4');
				win.h4.dataset["afterText"] = "- " + item.name;
			}

			function loadFileContent(data, extraData) {
				const text = data.text || false;
				if (!text) {
					return console.log("Wrong content");
				}
				const options = {
					target: extraData.input,
					container: extraData.container,
					text: text,
					delayRange: [10,100],
					lineEndDelay: 500,
					lineCommentDelay: 750,
					index: 0,
					max: text.length,
					line: text[0][0],
					setLine: function(n){ this.line = this.text[n][0]; }
				}
				autoTyper(options);
			}

			function addToContainer(e, text) {
				e.insertAdjacentHTML('beforeend', text+LINE_BREAK);
				scrollDown(e);
			}

			function scrollDown(e) {
				e.scrollTop = e.scrollHeight;
			}

			function autoTyper (data){
				const t = data.target;
				let txt = "";
				if (data.line.length > 0) {
					if (data.target){
						const delay = Math.random() * (data.delayRange[1] - data.delayRange[0]) + data.delayRange[0];
						setTimeout(function () {
							t.value += data.line.charAt(0);
							data.line = data.line.substr(1);
							autoTyper(data);
						}, delay);
					} else {
						//if element not exist, example during autowriteing someone close the window
						data = null;
					}
				} else {
					setTimeout(function () {
						const c = data.container;
						addToContainer(c, t.value);
						t.value = "";
						setTimeout(function () {
							const delay = data.text[data.index][1].length * 50 + 1000;
							addToContainer(c, "")
							if (data.text[data.index][1].length > 0) {
								txt += template.comment(data.text[data.index][1]);
							}
							addToContainer(c, txt)
							scrollDown(c)
							data.index++;
							if (data.index < data.max){
								setTimeout(function () {
									data.setLine(data.index);
									autoTyper(data);
								}, delay);
							} else {
								setTimeout(function () {
									//done, we quit
									addToContainer(c, LINE_BREAK + " ... finished")
									data = null;
								}, delay);
							}
						}, data.lineCommentDelay);
					}, data.lineEndDelay);
				}
			}


			function close(win) {
				const len = windows.length;
				let i = 0;
				for (; i < len; i++) {
					if (windows[i].id == win.id) {
						return windows.splice(i, 1);
					}
				}
			}

			return {
				close(win) {
					close(win);
				},
				launch(e, ev) {
					start(e);
				},
				open(e, ev) {
					open(e, ev);
				},
				remove() {

				}
			}
		},

		htmlViewer(settings, shared = false) {
			const { guid, components, req } = shared,
				{ window, datasource: ds } = settings.relationship;

			let windows = [];

			function createNewWindow() {
				const options = {
					data: false,
					appClass: settings.windowClass,
					title: settings.name,
					source: settings.constructorName,
					windowSize: settings.windowSize,
					randomPosition: settings.randomPosition,
					icon: settings.icon,
				};
				return components[window].register(options);
			}

			function start(e) {
				if (windows.length >= settings.maxProc) {
					return console.log('Too much opened window, cannot open more!');
				}
				let win = createNewWindow();
				if (!win) {
					console.log("Failed to create new window!");
					return false;
				}
				windows.push(win);
				return win;
			}

			function open(e, ev) {
				const {
					id = false,
					container = false,
				} = e.dataset;
				let win = start(e);
				if (!win || !container || !id) {
					return false;
				}
				const item = components[ds].get(id);
				if (!item || !item.url) {
					return console.log('Corrupt file or not exist the physical file!');
				}

				const callbackData = {
					body: win.body
				};

				req ("file", item.url, loadFileContent, "text", callbackData);
				win.h4 = win.dom.querySelector('.header h4');
				win.h4.dataset["afterText"] = "- " + item.name;
			}

			function loadFileContent(data, extraData) {
				extraData.body.innerHTML = data;

			}


			function close(win) {
				const len = windows.length;
				let i = 0;
				for (; i < len; i++) {
					if (windows[i].id == win.id) {
						return windows.splice(i, 1);
					}
				}
			}

			return {
				close(win) {
					close(win);
				},
				launch(e, ev) {
					start(e);
				},
				open(e, ev) {
					open(e, ev);
				},
				remove() {

				}
			}
		}
	}
}
