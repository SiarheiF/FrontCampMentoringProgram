'use strict';

module.exports = function(data){
	
	 class FillFacade{
	constructor(urlT, authorT){
		this.urlTmpl = urlT;
		this.authorTmpl = authorT
	}
	
	addNewNote(){
		document.getElementById("articles").appendChild(document.createTextNode("News"));
	}
	
	addUrl(){
		document.getElementById("articles").appendChild(this.urlTmpl);
	}
	
	addAuthor(){
		document.getElementById("articles").appendChild(this.authorTmpl);
	} 
	
	addBrNote(){
		document.getElementById("articles").appendChild(document.createElement("br"));
	}
	
	fillMethod(){
		this.addNewNote();	
		this.addUrl();
		this.addAuthor();
		this.addBrNote();
	}
};

	
	for (let  article of data.articles) { 
			let url = article.url;
			let title = article.title;
			let author = article.author;

			let urlTempalate = document.createElement("div");
			urlTempalate.innerHTML = `<a href='${url}'>${title}</a>`;

			let authorTemplate = document.createElement("div");
			authorTemplate.innerHTML = `<i>${author}</i>`;

			let f = new FillFacade(urlTempalate, authorTemplate);
			f.fillMethod();
		};
};
