const core = Object.freeze(new Core());
localStorage.clear();
function Core() {
	const head = document.querySelector("head"),
		components = {},
		fileTypeAssoc = {
			"html": "htmlViewer",
			"dir": "fileExplorer",
			"alert": "alert",
			"url": "fileSystem",
			"shell": "terminal",
			"task": "taskManager",
			"display": "desktopManager"
		};

	const shared = {
		components: {},
		closable: [],
		req: loadScript,
		assoc: fileTypeAssoc,
		getNamedDate,
		getFormattedTime,
		sec2Date,
		guid,
		getPath,
		isEmpty,
		objClone,
		blurable
	}

	loadScript("script", "components", () => {
		const {settings, classes} = componentData,
			keys = Object.keys(settings),
			param = ['component', 'options', 'shared'];
		let component, options;
		for (const key of keys) {
			component = classes[key] || false;
			options = settings[key] || false;
			if (!options || !component) { continue; }
			options.constructorName = key;
			/**
				i want make a custom script loader system like import with babel
				this is only just an idea and bit hacky but work well:
				1. we can make constructor functions in componentData
				2. we make new function from method with new Function()
				3. now we can construct object from it with new keyword
				4. delete the original script, so our object will be isolated here
			*/
			shared.components[key] = new (new Function(...param, 'return component(options, shared)'))(component, options, shared);
			if (options.launchbar) {
				shared.components['launchBar'].add(options);
			}
			//components[launch].add(settings);
		}
		removeScript("script", "components");
	});

	setTimeout(() => console.log('our loaded components: ', components), 1000);

	document.body.onclick = globalEventandler;
	document.body.oncontextmenu = globalEventandler;

	function callComponent(elem = null, path = false, event = false) {
		const c = shared.components;
		if (!elem) { return console.log('Element is null'); }
		const target = path.split('.');
		if (target.length < 2 || !c[target[0]]) {
			return console.log("Component not exist!");
		}
		shared.components['audioManager'].play(
			target[1] == "close" ? "close" : "click"
		);
		c[target[0]][target[1]](elem, event);
	}

	function globalEventandler(ev) {
		const e = getActionNode(ev.target, ev.type);
		if (!e) { return; }
		const d = e.dataset,
			action = d[ev.type];
		if (d.event == true || ev.type != "click") {
			ev.preventDefault();
		}

		if (action == "toggle") {
			if (!d.target || !d.classname) { return; }
			const target = document.getElementById(d.target);
			if (!target) { return; }
			target.classList.toggle(d.classname);
		} else if (action.indexOf(".") > -1) {
			callComponent(e, action, ev);
		}
	}

	function blurable(dom, func) {
		dom.tabIndex = -1;
		dom.onblur = func;
	}

	function getActionNode (e, target, max = 3) {
		if (e.dataset[target]) {
			return e;
		}
		let  i = 0;
		for (; i < max; i++) {
			e = e.parentNode;
			if (e.dataset && e.dataset[target]) {
				return e;
			}
		}
		return null;
	}

	function isEmpty (input) {
		if (typeof input == 'array') {
			return input.length == 0;
		}
		return !input || Object.keys(input).length == 0;
	}

	function removeScript(type, name) {
		const e = document.getElementById(`${type}_${name}`);
		if (e) {
			e.remove();
		}
	}

	function getPath(type, name) {
		if (type = "desktop") {
			return `img/desktop/${name}.png`;
		}
		return "";
	}

	function guid(len = 8) {
	  	function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      	.toString(16)
		      	.substring(1);
		}
		return "s".repeat(len).replace(/s/g, s4);
	}

	function getNamedDate(d) {
		const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			months = ["January","February","March","April","May","June","July","August", "September", "October", "November", "December"];
		return `${d.getFullYear()} ${months[d.getMonth()]} ${d.getDate()} (${days[d.getDay()]})`
	}

	function sec2Date (tstamp){
		const d = new Date(tstamp*1000);
		return (
			d.getFullYear()+". "+
			(d.getMonth()+1+"").padStart(2, "0") +". "+
			(d.getDay()+1+"").padStart(2, "0") +".  "+
			getFormattedTime(d)
		);
	}

	function getFormattedTime(d) {
		return (
			(d.getHours()+"").padStart(2, "0") + ":" +
			(d.getMinutes()+"").padStart(2, "0") + ":" +
			(d.getSeconds()+"").padStart(2, "0")
		);
	}

	function objClone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	function getScriptPath(type, name) {
		if (type == "script") {
			return `js/${name}.js`;
		} else if (type == "json") {
			return `db/${name}.json`;
		} else if (type == "file") {
			return `files/${name}`;
		}
		return false;
	}

	function loadScript (type, name, callback = false, responseType = 'text', callbackData = false) {
		const url = getScriptPath(type, name);

		if (!type || !name || !url) {
			return console.log('ERROR: invalid script type or name', type, name, responseType);
		}

		const contentType = 'application/x-www-form-urlencoded',
			httpRequest = new XMLHttpRequest();

		//httpRequest.overrideMimeType("text/plain");
		httpRequest.onreadystatechange = function(event) {
			if (this.readyState === 4) {
				if (this.status === 200) {
					if (type == "script") {
						const data = document.createElement(type);
						data.innerHTML = this.response;
						data.id = `${type}_${name}`;
						head.insertBefore(data, head.lastChild);
					}
					if ( callback && typeof callback == "function") {
						callback(this.response, callbackData);
					}
				} else {
					console.log("Script loading failed, maybe file not exist?", url);
				}
			}
		};

		httpRequest.responseType = responseType;
		httpRequest.open("GET", url, true);
		httpRequest.timeout = 3000;
		httpRequest.send();
	}

}
