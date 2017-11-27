core = Object.assign(core, {
	main : "section main",
	showArticle : "Show more...",
	hideArticle : "Show less...",
	toggleArticle (id) {
		let elem =  $(`${core.main} article#${id}`);
		elem.find("p span#hidden").toggleClass("hidden");
		elem.find("a.showMore").html(elem.find("a.showMore").html() === core.showArticle ? core.hideArticle : core.showArticle)
	},
	ObjToArticle(id, obj){
		let articleLink = [`<a href="javascript:void(0)" title="Jump to article" onclick="location.href='./article.html?id=${id}'">`, "</a>"]
		$(`<article id="${id}">
			  ${articleLink[0]}<div class="imgParent"><img src="./public/img/article/${id}.jpg"></div>${articleLink[1]}
			  ${articleLink[0]}<h1>${obj.title}</h1>${articleLink[1]}
			  <p>${obj.short_text} <span id="hidden" class="hidden">${obj.full_text}</span></p>
			  <a href="javascript:void(0)" title="Click here for open the article" onclick="location.href='./article.html?id=${id}';" class="aInline">Open this article</a>
			  or
			  <a href="javascript:void(0)" title="Click here for expand the article text" onclick="core.toggleArticle('${id}');" class="showMore aInline">${this.showArticle}</a>
		   </article>`).appendTo(this.main)
	},
	loadDatabase(Db) {
		virtualDB = Db;
		let articles = virtualDB.articles;
		
		Object.entries(articles).forEach(
			([key, value]) => core.ObjToArticle(key, value)
		);			
	}	
	
});
