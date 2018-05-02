core = Object.assign(core, {
	header : {
		background : "header.background",
		title : "header.background .title h1",
		subtitle : "header.background .title p"
	},
	
	main : {
		header : "section h1",
		body : "section main"
	},
	
	footer : {
		comment : {
			counter : "section footer h3",
			container : "section footer div.comments",
		}
	},
	
	cache : {
		comment : {
			text : "",
			time : 0
		}
	},
	
	validateEmail(email) {
	    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	},
	
	addNewComment(){
		/* this would be server side saveing to mysql with ajax but this page is fully front end */
		/* it's a demonstration only, so i don't waste the time the input sanitizeing & filtering */
		let inputs = [$("#userMessage"), $("#userName"), $("#userEmail")], text = inputs[0].val().trim(), name = inputs[1].val().trim(), email = inputs[2].val().trim(), time = +new Date(), timestamp = ~~(time/1000), commentCache = core.cache.comment;
		if ((text == "") || (name == "") || (email == "")) {alert("Fill the required fields!"); return;}
		if ((commentCache.text == text)||((timestamp-commentCache.time) < 5)) {alert("Please do not flood!"); return; }
		if (!core.validateEmail(email)) {alert("Use valid email address!"); return; }
		//we save the last comment time/text for make a lil harder to flood
		core.cache.comment = {text, time : timestamp};
		//lets check if user is logged in
		let userObj = {name, email, text, time:timestamp}, key = `id_${time}`;
		core.userId ? userObj["user"] = core.userId : null
		virtualDB.comments[key] = userObj;
		virtualDB.articles[core.articleId].comments.push(key);
		core.writeOutComments (key);
		localStorage.DB = JSON.stringify(virtualDB);
		inputs[0].val("");
		$(core.footer.comment.counter).html(`${virtualDB.articles[core.articleId].comments.length} comment`);
		core.timedMsg("New comment", 3)
	},
	
	writeOutComments (id, place = core.footer.comment.container) {
		let obj = virtualDB.comments[id] || {}, user = virtualDB.users[obj.user], rank = obj.user ? user ? user.rank : 0 : 0, rankColor = virtualDB.base.color[rank], avatar = user ? obj.user+".jpg" : "guest.png", name = user ? user.name : obj.name, text = obj.text, time = core.getDate(obj.time);
		$(`<figure>
			<div class="profile">
				<img src="./public/img/avatar/${avatar}" alt="avatar" title="Profile picture for ${name} user" onerror="this.onerror=null;this.src='./public/img/avatar/guest.png';">
			</div>
			<div class="details">
				<div class="time">${time}</div>
				<h4><font color='${rankColor}'>${name}</font></h4>
				<p>${text}<br><br></p>
			</div>
		   </figure>`).appendTo(place);		
	},
	
	writeOutArticle (id){
		let obj = virtualDB.articles[id], author = virtualDB.users[obj.author] || {name : "Guest"}, objPath = core.header, comments = obj.comments || [], commentContainer = core.footer.comment.container, theArticleText;
		$(objPath.background).css("background-image",`url(./public/img/article/${id}.jpg), url('./public/img/article/id_new.jpg')`);
		$(objPath.title).html(obj.title);
		$(objPath.subtitle).html(obj.short_text);
		$("h1 .art_title").html(obj.title);
		$("h1 .art_author").html(author.name);
		$("h1 .art_time").html(core.getDate(obj.time));
		core.articleId = id; 
		theArticleText = "<article>"+obj.full_text+"</article>"
		$(theArticleText).appendTo(core.main.body);
		objPath = core.footer.comment;
		$(objPath.counter).html(`${comments.length} comment`);
		// i write out comments 1 by 1, it is ok if we not have too much comment but we would store into array if we think we would have alot comment per article
		for (CommentId of comments){
			core.writeOutComments(CommentId, commentContainer)
		}
		//autofill and hide the inputs if user is logged in, but we don't need to do instantly anyway
		setTimeout(()=>{
			if (core.userId){
				let user = virtualDB.users[core.userId];
				$("#userName").val(user.name);
				$("#userEmail").val(user.email);
				$(".guest-input").fadeOut();
			}		
		},2000);
	},
	
	loadDatabase(Db) {
		virtualDB = Db;
		let articles = virtualDB.articles;
		if (Object.keys(articles).length==0) return;
		let urlParams = new URLSearchParams(window.location.search);
		let id = urlParams.has('id') ? urlParams.get('id') : Object.keys(articles)[0];	
		core["articleId"] = id;
		core.writeOutArticle(id);		
	}	
	
});