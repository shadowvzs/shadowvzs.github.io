var Notify = function() {
	var BOX_CLASS = "notify",
		CONTAINER_CLASS = "notify-container",
		CONTAINER_ID = "notifyContainer",
		NOTIFY_WIDTH = 300, 
		container = document.getElementById(CONTAINER_ID),
		notifyList = {};
		lastId = 0,
		transitionHandler = function(){
			let id = this.id, 
				notify = notifyList[id].dom,
				notifyClose = notifyList[id].close;
			notifyClose.removeEventListener("click", notifyCloseHandler);
			notify.removeEventListener("transitionend", transitionHandler);
			notify.removeChild(notifyClose);
			container.removeChild(notify);
			notifyList[id].dom = null;
			notifyList[id].notifyClose = null;
			clearTimeout(notifyList[id].timer);
			delete notifyList[id];			
		}, 
		notifyCloseHandler = function(){
			close(this.parentElement.id);
		};			

	function createContainer() {
		container = document.createElement("div");
		container.className = CONTAINER_CLASS;
		container.id = CONTAINER_ID;
		document.body.appendChild(container);
	}	

	// Types: 'error', 'success', 'notice', 'warning', 'normal'
	function newNotify (message, type="normal", NOTIFY_DURATION=5) {
		//type: warning, notice, error, success, normal
		var id = 'notification_' + lastId;
		if(!container) {
			 createContainer();
		}		

		var newNotify = document.createElement("div"),
			closeButton = document.createElement("div");
		newNotify.className = BOX_CLASS + " " + type;
		newNotify.id = id;
		newNotify.innerHTML = message;
		newNotify.style.marginLeft = NOTIFY_WIDTH + 10 + "px";
		newNotify.appendChild(closeButton);
		closeButton.className = "close-notify";
		closeButton.innerHTML = "&#10060;";
		closeButton.addEventListener("click", notifyCloseHandler, false);

		notifyList[id] = { 
			id, 
			message, 
			type, 
			dom: newNotify, 
			close: closeButton, 
			timer: setTimeout(function() {
				removeNotify(id);
			}, NOTIFY_DURATION * 1000)
		};
		container.insertBefore(newNotify, container.firstChild);
		lastId++;

	}
	
	function close (id) {
		removeNotify(id);
	}

	function removeNotify(id) {
		var notify = notifyList[id].dom;
		notify.classList.add("fade-out");
		notify.addEventListener("transitionend", transitionHandler, false);
	}	
	
	return {
		add (message, type = "notice") {
			newNotify (message, type);
		},
	}
}