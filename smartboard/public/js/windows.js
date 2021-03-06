$.fn.removeCss=function(toDelete) {
	let props = $(this).attr('style').split(';');
	let tmp = -1;

	for( let p=0; p<props.length; p++) {
		if(props[p].indexOf(toDelete) !== -1 ) {tmp=p; break;}
	}

	if(tmp !== -1) props.splice(tmp, 1)
	
	return $(this).attr('style',props.join(';'));
}

$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$.fn.dragdrop = function (el) {
   this.bind('mousedown', e => {
        var relX = e.pageX - $(el).offset().left;
        var relY = e.pageY - $(el).offset().top;
        var maxX = $('body').width() - $(el).width() - 10;
        var maxY = $('body').height() - $(el).height() - 10;
        $(document).bind('mousemove', e => {
            var diffX = Math.min(maxX, Math.max(0, e.pageX - relX));
            var diffY = Math.min(maxY, Math.max(0, e.pageY - relY));
            $(el).css('left', diffX + 'px').css('top', diffY + 'px');
        });
    });
    $(window).bind('mouseup', e => {
        $(document).unbind('mousemove');
    });
    return this;
};

var windowTheme=[
	{
		"focus":"focusWindow",
		"header":"blueBar",
		"button":"blueMiniButton headerMiniButtons",
		"content":"blueContent"
	},
	{
		"focus":"",
		"header":"blueBar",
		"button":"blueMiniButton headerMiniButtons",
		"content":""
	}
]
			
class windowBuilder{
	registerWindow (id, options){
		if (windowManager.list[id]) return -1
		windowManager.list[id] = options
	}
	createWindow(options)  {
		let [timestamp, theme, cssOptions] = [Date.now(), windowTheme[options.themeId], []] 
		let id = `win_${timestamp}`
		let defPosArr = [['"top":"0px"'],['"left":"0px"']]
		let defPosition = common.arrayToJSON([['"top":"0px"'],['"left":"0px"']])
		let posArr = []
		if (!options.position) options["position"]={}
		let pos = options.position

		// collect position into array
		if (pos["left"]) posArr.push([`"left":"${pos['left']}"`])
		if (pos["top"]) posArr.push([`"top":"${pos['top']}"`])
		if (pos["right"]) posArr.push([`"right":"${pos['right']}"`])
		if (pos["bottom"]) posArr.push([`"bottom":"${pos['bottom']}"`])
		if (posArr.length<2) {posArr=defPosArr;options.position=defPosition;}

		//set default values
		options["id"]=id
		options["minimized"]=false
		options["maximized"]=false
		
		// options
		let boxShadow = options.boxShadow ? "boxShadow" : ""
		let windowType = options.windowType ? options.windowType : "simpleWindow"
		let contentType = options.contentType ? options.contentType : "normalContent"	

		// break conditions: id alread exist, parent container not exist, theme not exist
		if (!$(options.parentContainer).length) return -1
		if (!theme) return -1
	
		// create components like: header [inc buttons] + content [inc content]
		theme.button+=" unselectable"
		theme.header+=" unselectable"
		let minimizeButtonDiv = options.showMinimize ? `
			<div class="${theme.button} minimizeButton" onclick="windowManager.minimize('${id}')">&#95;</div>` : ``
		let maximizeButtonDiv = options.showMaximize ? `
			<div class="${theme.button} maximizeButton" onclick="windowManager.maximize('${id}')">&square;</div>` : ``
		let closeButton = options.showClose ? `
			<div class="${theme.button} closeButton" onclick="windowManager.close('${id}')">&#10006;</div>` : ``
		let headerTitle = options.headerTitle ? options.headerTitle : `Window: ${id}`
		let windowHeader = options.showHeader ? `
			<header class="windowHead ${theme.header}">
				<p class="windowHeaderTitle">${headerTitle}</p>
				<div class="windowHeaderButtonList">
					${minimizeButtonDiv}${maximizeButtonDiv}${closeButton}
				</div>
			</header>` : ``
		//buttons (for new shorthand for loop, i fixed if array not exist)
		let buttons = options.buttons ? `<br>` : ``
		
		for (let data of options.buttons||[]){
			let arg = windowManager.actionConstructor(id, data[2], data[3])
			let clickEvent = `windowManager["${data[1]}"](${JSON.stringify(arg).slice(1, -1)})`
			buttons+=` <button class='windowButton' onclick='${(clickEvent)}'>${data[0]}</button> `
		}

		let windowContent = options.showContent ? `
			<main class="windowContent ${contentType} ${theme.content}">
				${options.contentText} ${buttons}
			</main>` : ``

		// create the window and insert the header/content part, add window classes and make it dragable if needed 
		let focusable = options.focusable ? 'tabIndex="0"' : ''
		let windowBone = `<div id="${id}" ${focusable}>${windowHeader} ${windowContent}</div>`
		$(windowBone).appendTo(options.parentContainer)
		let newWindow = $("#"+id)

		newWindow.addClass(`window ${windowType} ${boxShadow} ${theme.focus}`);
		if ((options.showHeader) && (options.dragable)) $(`#${id} header`).dragdrop("#"+id)
		//----------------------
		//		options.position.
		//-----------------------			
		// set width, height, modal, opacity, focus class if needed
		if (options.width != -1)   cssOptions.push(`"width":"${options.width}px"`)
		if (options.height != -1)  cssOptions.push(`"height":"${options.height}px"`)
		if (options.opacity != 1)  cssOptions.push(`"opacity":${options.opacity || 1}`)

		if (options.modalLock){
			cssOptions.push(`"z-index":"10000"`)
			let modalLayer = `<div class="modalLayer unselectable" id="modal_${id}"> </div>`
			$(modalLayer).appendTo("body")
		}
		if (cssOptions.length) newWindow.css(common.arrayToJSON(cssOptions))
		
		if (pos.random) {
			newWindow.offset(common.randomPosition('body', `#${id}`))
		}else{
			newWindow.css(common.arrayToJSON(posArr))
			//this is more tricky, because user can set right and bottom but we need change to left and top
			posArr = [`"left":"${~~newWindow.offset().left}px"`, `"top":"${~~newWindow.offset().top}px"`]
			newWindow.removeCss('bottom')
			newWindow.removeCss('right')
			newWindow.css(common.arrayToJSON(posArr))
		
		}
		
		newWindow.hide()
		newWindow.fadeIn()
		options.focusable ? newWindow.focus() : null
		if (this.registerWindow(id, options) == -1)	return -1
		if (common.objKeysExist(options, ["timer", "data"], true)){
			let timers = options.timer.data
			for (let data of timers){
				setTimeout(()=>{
					options.timer.handler.push(setTimeout(()=>{
						let arg = windowManager.actionConstructor(id, data[2], data[3])
						windowManager[data[1]](...arg)
					},data[0]*1000)
					)
				},0)
			}
		}

		if (options.modalLock){
			$("#"+id).center();
		}
		$("#"+id+" button").focus()
		return id	
	}
}

var common={
	objKeysExist(obj, keys, notEmpty){
		for (let key of keys){
			if (!obj[key]) return false
			obj = obj[key]
		}
		if ((obj.length == 0)&&(notEmpty)) return false
		return true;
	},
	arrayToJSON(arr){
		return JSON.parse("{"+arr.join(",")+"}")
	},
	randomPosition(parent, div){
		let left, top, maxLeft = ($(parent).width()-$(div).width()), maxTop = ($(parent).height()-$(div).height()) 
		maxLeft < 1 ? left = 0 : left = ~~(Math.random()*maxLeft)
		maxTop < 1 ? top = 0 : top = ~~(Math.random()*maxTop)
		return common.arrayToJSON([`"left":${left}`,`"top":${top}`])
	}		
}

var windowManager={
	list : {}, 
	actionConstructor(id, param, newWindow){
		if (newWindow){
			return typeof param==="object" ? [...param] : [param]
		}else{
			if (param){
				return  typeof param==="object" ? [id, ...param] : [id, param]
			}else{
				return [id]
			}
		}
	},
	close (id){
		if (!this.list[id]) return -1
		let data = this.list[id]
		if (common.objKeysExist(data, ["timer", "handler"], true)){
			for (let handler of data.timer.handler){
				clearTimeout(handler)
			}
		}
		this.list[id] = null
		$("#"+id).remove()
		if (data.modalLock) $(`#modal_${id}`).remove()
	},
	minimize (id){
		if (!this.list[id]) return -1
		let data = this.list[id]
		thisWindow=$("#"+id)
		data["minimized"] = data["minimized"] ? false : true
		data["minimized"] ? thisWindow.fadeOut() : thisWindow.fadeIn()
	},
	maximize (id){
		if (!this.list[id]) return -1
		let data = this.list[id]
		let pos = data.position
		thisWindow=$("#"+id)
		if (data["maximized"]){
			let width, height
			thisWindow.offset({top:pos["top"]||0,left:pos["left"]||0})	
			width = data.width > 0 ? data.width : "auto"
			height = data.height > 0 ? data.height : "auto"
			thisWindow.css({"width":width, "height":height})			
		}else{
			pos["top"] = thisWindow.offset().top
			pos["left"] = thisWindow.offset().left
			thisWindow.offset({top:0,left:0})
			thisWindow.css({"width":"100%", "height":"100%"})
		}
		data["maximized"] = data["maximized"] ? false : true
	},
	changeContent (id, msg){
		let body = this.list[id].contentType
		$(`#${id} .${body}`).html(msg)
	},
	newDialog(dialogId, winBody, buttons) {
		let id = dialogId, themeId = 1, icons=["info", "warning", "error", "dialog"], title = icons[id] || "Unknown"
		let icon = icons[id] ? `<img src='./public/img/icons/${icons[id]}.png' alt='${icons[id]}' title='${icons[id]}' class='noticeIcon unselectable'>` : ``
		var options={
			"showClose" : true,					
			"showHeader" : true,
			"showContent" : true,				
			"boxShadow" : true,					
			"dragable" : true,					
			"modalLock" : true,					
			"parentContainer" : "body",	 		
			"windowType" : "simpleWindow",				
			"contentType" : "dialogContent",			
			"headerTitle" : title,		
			"contentText" : `${icon} ${winBody}`,
			"themeId" : themeId,						
			"position" : {						
				"right" : "40%",
				"bottom" : "40%"
			},
			"buttons" : buttons
		}
		win.createWindow(options);
	}, 
	newMessage(msg, timers){
		let themeId = 1
		var options={
			"showContent" : true,				
			"boxShadow"   : true,					
			"parentContainer" : "body",	 		
			"windowType"  : "messageWindow blueContent",				
			"contentType" : "messageContent",			
			"contentText" : `${msg}`,
			"themeId"   : themeId,	
			"opacity"   : 0.75,	
			"timer"		: { 
						"data"	  : timers,			 // timer (sec) declare with callback function, timer start when window create and look like [[30, "timerFunc1" , "string based data but could be null too"]], after 30 sec execute windowManager["timerFunc"](id) method
						"handler" : []				 // set timeout handlers stored here, because we destroy them if its closed faster than timeout function executed, must be [] and not null
			},
			"buttons"   : [],
			"position"  : {						
				"top"   : "3px",
				"right" : "3px"
			}
		}		
		win.createWindow(options);
	},
	deleteArticle(id){
		core.deleteArticle(core.deleteCandidate)
		windowManager.close(id)
	}
}