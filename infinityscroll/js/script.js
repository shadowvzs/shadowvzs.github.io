{
	let	content = document.getElementById('content'),
		winH = Math.max(screen.height, content.offsetHeight),
		conH = content.offsetHeight,
		loadingAnimation = document.querySelector('.loader'),
		bottomElem = content.querySelector('.bottom'),
		loading = false,
		counter = 0,
		imageLoadHandler = e => {
			let parent = document.createElement('div');
			parent.classList.add('box');
			parent.appendChild(e.target);
			parent.id = "image_"+e.target.dataset.id;
			loading = false;
			loadingAnimation.style.display = 'none';
			counter++;
			e.target.removeEventListener('load', imageLoadHandler);
			bottomElem.before(parent);
		},
		errorHandler = data => alert('Something when wrong with request'),
		successHandler = data => {
			// add new element or remove the event listener
			if (data[counter]) {
				let img = document.createElement('img');
				img.src = data[counter].src;
				img.addEventListener('load', imageLoadHandler);
				img.dataset.id = data[counter].id;
			} else {
				console.log('scroll event listener removed');
				loadingAnimation.style.display = 'none';
				content.removeEventListener('scroll', scrollHandler);
			}
	
		}, 
		scrollHandler = e => {
			let scrollY = (content.scrollTop + conH);
			if ((content.scrollHeight - scrollY) < 20 && !loading) {
				loadData();
			}
		},
		loadData = () => {
			loadingAnimation.style.display = 'block';
			Ajax( 
				{ 
					url: 'data.json',
					method: 'get',
					data: counter, 
				}, 
				successHandler,
				errorHandler,
			)
			loading = true;
		};

		scrollHandler();
		// add scroll event listener
		content.addEventListener('scroll', scrollHandler);
		// focus to content, so can use pageup and pagedown
		content.tabIndex = '0';
		content.focus();
}	

function Ajax (setup, success, error) {

	if (typeof error != "function" || typeof success != "function") { return alert('Missing classback(s)....'); }
	if (!setup || !setup.url) { return error('no settings for request'); }
	var type = (!/(GET|POST|PUT|DELETE)/.test(setup.method)) ? "GET": setup.method ; 
	var url = setup.url;
	var data = setup.data;
	var httpRequest = new XMLHttpRequest();     
	
	if ((!data || (Object.keys(data).length === 0 && data.constructor === Object))) {
		data = null;
	} else if (type === "GET") {
		url += (~url.indexOf("?") ? "&" : "?") + serialize(data);
		data = null;
	}
  
	httpRequest.onreadystatechange = function(event) {
	
		if (this.readyState === 4) {
			if (this.status === 200) {
				if (!this.response) { error("no returned data"); return false; }
				success (this.response);
			} else {
				error(this.status);
			}
		}
	};
	
	httpRequest.responseType = 'json';
	httpRequest.open(type, url, true);

	if (type !== "POST" || !data) {
		httpRequest.send();
	}else{
		httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		httpRequest.send(serialize(setup.data));
	}
}

var serialize = function(obj, prefix) {
  var str = [], p;
  for(p in obj) {
	if (obj.hasOwnProperty(p)) {
	  var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
	  str.push((v !== null && typeof v === "object") ?
		serialize(v, k) :
		encodeURIComponent(k) + "=" + encodeURIComponent(v));
	}
  }
  return str.join("&");
};