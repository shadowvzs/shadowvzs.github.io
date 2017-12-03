core = Object.assign(core, {
	main : "section main",
	showArticle : "Show more...",
	hideArticle : "Show less...",
	toggleArticle (id) {
		let elem =  $(`${core.main} article#${id}`);
		elem.find("span#hidden").toggleClass("hidden");
		elem.find("a.showMore").html(elem.find("a.showMore").html() === core.showArticle ? core.hideArticle : core.showArticle)
	},
	
	ObjToArticle(id, obj){
		let articleLink = [`<a href="javascript:void(0)" title="Jump to article" onclick="location.href='./article.html?id=${id}'">`, "</a>"]
		$(`<article id="${id}">
			  ${articleLink[0]}<div class="imgParent"><img src="./public/img/article/${id}.jpg" onerror="this.src='./public/img/article/id_new.jpg';"></div>${articleLink[1]}
			  ${articleLink[0]}<h1>${obj.title}</h1>${articleLink[1]}
			  <p>${obj.short_text} <span id="hidden" class="hidden"></span></p>
			  <a href="javascript:void(0)" title="Click here for open the article" onclick="location.href='./article.html?id=${id}';" class="aInline">Open this article</a>
			  or
			  <a href="javascript:void(0)" title="Click here for expand the article text" onclick="core.toggleArticle('${id}');" class="showMore aInline">${this.showArticle}</a>
		   </article>`).appendTo(core.main)
			$("<h2 class='reset'></h2>"+(obj.full_text || "")+"<h2 class='reset'></h2>").appendTo("article#"+id+" p span.hidden")
	},
	
	containsWord( string, word) {
		return new RegExp("\\b" + word + "\\b").test(string);
	},
	
	searchArticle (){
		let filter = $("#searchInput").val().trim().toLowerCase(), articles = virtualDB.articles;;
		$(core.main).html("");
		if (filter == ""){
			Object.entries(articles).forEach(
				([key, value]) => core.ObjToArticle(key, value)
			);					
		}else{
			//we would sanitize search input, but i skip this step
			let count, words = filter.indexOf(" ") == -1 ? [filter] : filter.split(" ")
			
			Object.entries(articles).forEach(
				([key, value]) => {
					count = 0;
					for (word of words){
						if (core.containsWord( value.title.toLowerCase(), word)) {
							count++
							core.ObjToArticle(key, value)
							break;
						}
					}
				}
			);	
			

			count = $("section main article").length
			if (count == 0) $("<article class='reset'><h2><i>Sorry, no result</i></h2></article>").appendTo(core.main)
			$("section main").css("display", count == 1 ? "block" : "flex") 	//column reverse with 1 item  bit dizzy
		}
	},
	
	inputEnterEvent(e){
		e = e || window.event;
		if (e.keyCode == 13){
			core.searchArticle();
			return false;
		}
		return true;		
	},
	
	loadDatabase(Db) {
		virtualDB = Db;
		let articles = virtualDB.articles;
		$("header .title h1").html(virtualDB.base.title);
		$("header .title p").html(virtualDB.base.subtitle);
		Object.entries(articles).forEach(
			([key, value]) => core.ObjToArticle(key, value)
		);			
	}	
});
