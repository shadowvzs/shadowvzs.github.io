core = Object.assign(core, {
	main : "main .middle",
	selectedArticle : "",
	busyEditing : false,
	deleteCandidate : "",
	toggleArticle (id) {
		let elem =  $(`${core.main} article#${id}`);
		elem.find("span#hidden").toggleClass("hidden");
		elem.find("a.showMore").html(elem.find("a.showMore").html() === core.showArticle ? core.hideArticle : core.showArticle)
	},
	
	userVerification(){
		let aside = $("aside .container"), login = aside.find(".log-in-out"), profile = aside.find(".profile")
		login.find("a.logIn").show()
		if (localStorage.user){
			let userObj = JSON.parse(localStorage.user)
			let key = Object.keys(userObj)[0];
			if (!virtualDB.users[key]) return false
			if (JSON.stringify(virtualDB.users[key]) !== JSON.stringify(userObj[key])) return false
			login.find("a.logIn").hide()
			login.find("a.logOut").show()
			let user = virtualDB.users[key]
			aside.find(".newPost").css("display", "inline-block")
			profile.css("display", "block")
			profile.find("img.avatar").attr("src","./public/img/avatar/"+key+".jpg")
			profile.find("a.username").html(user.name)
			core["userId"] = key
			core["rank"] = user.rank
			
			return true;
		}	
		return false;
	},
	
	saveArticle(newArticle=false){
		//we could add user rank verification aswell with (core.rank > 1) but no point in this demonstation
		let id = core.selectedArticle, editArticle = $(".popin-container .popin .editArticle"), title = editArticle.find("input.art_inp_title").val().trim(), short_text = editArticle.find("input.art_inp_desc").val().trim(), full_text = editArticle.find("textarea").val().trim().replace(/\n/g, "<br>");
		//if it is a selected article (not selected article = new article)
		if (id != ""){
			//if we update the article and title was changed lets change title on dashboard list item too
			if (title != virtualDB.articles[id].title) $(`figure#${id} figcaption`).html(title)
			//update the database object
			Object.assign(virtualDB.articles[id], {title, short_text, full_text})
		}else if((title != "")&&(short_text != "")&&(full_text != "")){
			let time = +new Date(), author = core.userId, comments = [], timestamp = ~~(time/1000)
			id = "id_"+time
			
			let newArticleObj = {author, title, time:timestamp, short_text, full_text, comments}
			virtualDB.articles[id] = newArticleObj			//add new article into dashboard
			core.createArticle(id, newArticleObj)	
			id = ""
		}
		localStorage.DB = JSON.stringify(virtualDB);
		core.closeArticleWindow()
		core.timedMsg(id == "" ? "New article posted" : "Article updated", 3)
	},
		
	switchArticle(){
		$(".main.editArticle").toggle()
		$(".main.readArticle").toggle()
	},

	readArticle(id){
		let next = false, header = $(".popin-container .popin .main h1"), readArticle = ".popin-container .popin .readArticle article"
		let title, article, author, time
		if (id != "") {
			article = virtualDB.articles[id];
			if (!article) return;	
			core.selectedArticle = id
			$(".main.editArticle").hide()
			$(".main.readArticle").show()
			if (!core.busyEditing) {
				$('.popin-container').fadeIn()
				core.busyEditing = true
			}
			title = article.title
			author = virtualDB.users[article.author].name || "Bot user"
			time = core.getDate(article.time)
			next = true
		}else{
			$(".main.editArticle").show()
			$(".main.readArticle").hide()
			title = "New article"
			author = "You"
			time = "Now"
			article = {title : '', short_text : '', full_text : ''}, id = "id_new"
			next = true
			$('.popin-container').fadeIn()
		}
		
		if (next){
			let editArticle = $(".popin-container .popin .editArticle"), regex = /<br\s*[\/]?>/gi
			$(readArticle).html("");
			header.find(".art_title").html(title);
			header.find(".art_author").html(author);
			header.find(".art_time").html(time);
			$(".popin-container .popin .header .title").html(title);
			$("<h2 class='reset'></h2>"+article.full_text+"<h2 class='reset'></h2>").appendTo(readArticle)
			editArticle.find("input.art_inp_title").val(article.title);
			editArticle.find("input.art_inp_desc").val(article.short_text);
			editArticle.find("textarea").val(article.full_text.replace(regex, "\n"));
			//we set cove for edit window but also add a fallback image, 2nd image if 1st not exist
			$(".popin-container .popin .header").css("background-image","url(./public/img/article/"+id+".jpg), url('./public/img/article/id_new.jpg')");
		}		
	},
	
	deleteArticleConfirmation(id){
		if (!virtualDB.articles[id]) return false;
		core.deleteCandidate=id
		windowManager.newDialog(1, `Do you want delete this article? <br><br><div style='text-align: center;'>Info: <b>${virtualDB.articles[id].title}</b> <i>[${id}]</i></div>`, [["Yes", "deleteArticle", false, false], ["No", "close", false, false]])

	},
	
	deleteArticle(id){
		if (!virtualDB.articles[id]) return false;
		delete virtualDB.articles[id]
		$(`figure#${id}`).remove();
		core.deleteCandidate=""
		//we deleted either the graphical part (div with article icon and title) and article object from database object, now we save the changes
		localStorage.DB = JSON.stringify(virtualDB);
		core.timedMsg("Article deleted", 3)
	},
	
	createArticle(id, obj){
		let delLink = core.rank > 0 ? `<a class="deleteArticle" title="Delete article [${id}]" onclick="core.deleteArticleConfirmation('${id}');">&#10005;</a>` : "" 
		$(`<figure id="${id}">${delLink}
			  <div class="imgParent" style="overflow: hidden;" onclick="core.readArticle('${id}');"><img src="./public/img/article/${id}.jpg" style="left:50%;transform: translate(-50%);height: 229px;" onerror="this.src='./public/img/article/id_new.jpg';"></div>
			  <figcaption onclick="core.readArticle('${id}');">${obj.title}</figcaption>
		   </figure>`).appendTo(core.main)
	},
	
	closeArticleWindow(){
		core.busyEditing = false
		$('div.popin-container').fadeOut()
		core.selectedArticle = ""
	},
	
	selectSideMenu(id){
		if (typeof core.menu[id] == 'function'){
			core.menu[id]()
			$("aside .container .menu a").removeClass("selected")
			$(`#menu_${id}`).addClass("selected")
		}
	},
	
	selectHeaderTab(id){
		if (typeof core.tab[id] == 'function'){
			core.tab[id]()
			$("header nav a").removeClass("selected")
			$(`#tab_${id}`).addClass("selected")
		}
	},
	
	tabs : {
		text : []
	},
	menu : {
		text : ["dashboard","widgets","charts", "tables", "alerts"],
		dashboard() {
			core.infoMsg("do something action for <b><i>dashboard</i></b> link")
		},
		widgets() {
			core.infoMsg("do something action for <b><i>widget</i></b> link")
		},
		charts() {
			core.infoMsg("do something action for <b><i>chart</i></b> link")
		},
		tables() {
			core.infoMsg("do something action for <b><i>tables</i></b> link")
		},
		alerts() {
			core.infoMsg("do something action for <b><i>alerts</i></b> link")
		}
	},
	
	tab : {
		text : ["my dashboard", "statistics"],
		my_dashboard(){
			core.infoMsg("if you click here then something happen<br>but i do not know what :D ")
		},
		statistics(){
			core.infoMsg("but if you click to this tab then something else happen :D")
		}
	},
	
	userInformation() {
		let id = core.userId	
		//if blocks, if id not exist or not setted then break the function
		if (!id) return;
		if (!virtualDB.users[id]) return;
		let user=virtualDB.users[id], ranks=["Guest", "Member", "Moderator"],msg = `Hello dear ${user.name},<br> i give you few information<br> about your account:<br><br><span style='text-align: left;display: block;'>Username: ${user.username}<br>Full name: ${user.name}<br>Email: ${user.email}<br>Registered at: ${core.getDate(user.time)}<br>Status: ${ranks[user.rank]}<br>Messages: ${user.messages.length}</span>`;
		core.infoMsg(msg)
	},
	
	toggleInbox(){
		let hiddenElem = $('main .middle .inbox .inbox_text .hidden-text'), toggleLink = $('main .middle .inbox .read_more')
		let display = hiddenElem.css('display')
		hiddenElem.css('display', display=='none' ? 'flex' : 'none' )
		toggleLink.html(toggleLink.html() == 'Show more' ? 'Show less' : 'Show more') 
	},
	
	loadMessages(){
		let id = core.userId, user = virtualDB.users[id];
		if (id == "") return;
		if (!user) {$("main .middle .inbox").hide();return;}
		let msgids = user.messages,msgCount = msgids.length, messages = virtualDB.messages, msg, msgText, visibleText, hiddenText, placeholder = "main .middle .inbox .inbox_text", hiddenPlaceholder = placeholder+" .hidden-text";
		$(placeholder).html("<span class='hidden-text'> </span>")
		for (let msgid of msgids){
			if (messages[msgid]){
				msg = messages[msgid]
				msgText = `<div class='inbox-message'><div class='inbox-message-info'>${virtualDB.users[msg.from].name || 'unknown'} <span class='time'>${core.getDate(msg.time)}</span></div>${msg.text}<br><br></div>`
				!visibleText ? visibleText =  msgText : hiddenText += msgText
			}
		}		
		$(visibleText).appendTo(placeholder)
		if (msgCount < 2) {
			$("main .middle .inbox .read_more").hide()
		}else{
			$(visibleText).appendTo(hiddenPlaceholder)
		}
		
	},

	loadDatabase(Db) {
		virtualDB = Db;
		let menus = core.menu.text, tabs = core.tab.text, menuList = "", tabList = "", safeMenu, safeTab;
		let articles = virtualDB.articles;
		let userLogged = core.userVerification();
		// create articles in dashboard
		Object.entries(articles).forEach(
			([key, value]) => core.createArticle(key, value)
		);	
		
		// create menu for dashboard
		for (let menu of menus){
			safeMenu = menu.replace(/ /g,"_");
			menuList += `<a href='javascript:void(0);' id="menu_${safeMenu}" onclick='core.selectSideMenu("${safeMenu}");'> ${menu} </a>`
		}
		for (let tab of tabs){
			safeTab = tab.replace(/ /g,"_");
			tabList +=  `<a href='javascript:void(0);' id="tab_${safeTab}"   onclick='core.selectHeaderTab("${safeTab}");'> ${tab} </a>`
		}		
		//create tabs, then burger menu and normal aside menu
		$(tabList).appendTo("header nav")
		$(menuList).appendTo("header .burger #burger_menu")
		$(menuList).appendTo("aside .container .menu")
		//let select the default menu and tabs with a "selected" class
		$("aside .container .menu a").eq(0).addClass("selected")
		$("header nav a").eq(0).addClass("selected")
		// read messages if user is logged
		core.loadMessages()
	}	
	
});