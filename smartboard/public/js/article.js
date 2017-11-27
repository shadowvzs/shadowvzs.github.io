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
	addNewComment(){
		/* this would be server side saveing to mysql with ajax but this page is fully front end */
		/* it's a demonstration only, so i don't waste the time the input sanitizeing & filtering */
		let inputs = [$("#userMessage"), $("#userName"), $("#userEmail")], text = inputs[0].val().trim(), name = inputs[1].val().trim(), email = inputs[2].val().trim(), time = +new Date(), timestamp = ~~(time/1000), commentCache = core.cache.comment;
		if ((text == "") || (name == "") || (email == "")) {alert("Fill the required fields!"); return;}
		if ((commentCache.text == text)||((timestamp-commentCache.time) < 5)) {alert("Please do not flood!"); return; }
		//we save the last comment time/text for make a lil harde to flood
		core.cache.comment = {text, time : timestamp};
		//we would add if user is logged in or not, in this case we not do that, mainly because it must be controlled from server side too
		
		//------------------- NEED ADD USER id (user) if user logged in ----------
		let userObj = {name, email, text, time:timestamp}, key = `id_${time}`;
		virtualDB.comments[key] = userObj;
		core.writeOutComments (key);
		inputs[0].val("");
		inputs[1].val("");
		inputs[2].val("");
	},
	writeOutComments (id, place = core.footer.comment.container) {
		let obj = virtualDB.comments[id] || {}, user = virtualDB.users[obj.user], rank = obj.user ? user ? user.rank : 0 : 0, rankColor = virtualDB.base.color[rank], avatar = user ? obj.user+".jpg" : "guest.png", name = user ? user.name : obj.name, text = obj.text, time = core.getDate(obj.time);
		$(`<figure>
			<div class="profile">
				<img src="./public/img/avatar/${avatar}" alt="avatar" title="Profile picture for ${name} user">
			  </div>
			  <div class="details">
				<div class="time">${time}</div>
				<h4><font color='${rankColor}'>${name}</font></h4>
				<p>${text}<br><br></p>
			  </div>
		   </figure>`).appendTo(place);		
		   
	},
	writeOutArticle (id){
		let obj = virtualDB.articles[id], author = virtualDB.users[obj.author] || {name : "Guest"}, objPath = core.header, comments = obj.comments || [], commentContainer = core.footer.comment.container;
		$(objPath.background).css("background-image",`url(./public/img/article/${id}.jpg)`);
		$(objPath.title).html(obj.title);
		$(objPath.subtitle).html(obj.short_text);
		$(core.main.header).html(`${obj.title} / posted by: ${author.name} / ${core.getDate(obj.time)}`);
		$(obj.html).appendTo(core.main.body);
		objPath = core.footer.comment;
		$(objPath.counter).html(`${comments.length} comment`);
		// i write out comments 1 by 1, it is ok if we not have too much comment but we would store into array if we think we would have alot comment per article
		for (id of comments){
			core.writeOutComments(id, commentContainer)
		}

	},
	loadDatabase(Db) {
		virtualDB = Db;
		let articles = virtualDB.articles;
		if (Object.keys(articles).length==0) return;
		let urlParams = new URLSearchParams(window.location.search);
		let id = urlParams.has('id') ? urlParams.get('id') : Object.keys(articles)[0];	
		core.writeOutArticle(id);		
	}	
	
});
