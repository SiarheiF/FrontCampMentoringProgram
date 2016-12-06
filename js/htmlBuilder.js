'use strict';

 module.exports.HtmlBuilder = class HtmlBuilder{
	 
	constructor(url, title, author){
		this.url = url;
		this.author = author;
		this.title = title;
	}
	
	createTitleHtml(){
		let urlTempalate = document.createElement("div");
			urlTempalate.innerHTML = `<a href='${this.url}'>${this.title}</a>`;
			return urlTempalate.outerHTML;
	}
	
	createAuthorHtml(){
		let authorTemplate = document.createElement("div");
			authorTemplate.innerHTML = `<i>${this.author}</i>`;
			return authorTemplate.outerHTML;
	}
	
	createNewsHtml(){
		let dataTemplate = document.createElement("div");
		dataTemplate.innerHTML =`${this.createTitleHtml()} ${this.createAuthorHtml()}`;
		return dataTemplate.outerHTML;
	}
	
	htmlBuild(){
		let newsTemplate = document.createElement("div");
		newsTemplate.innerHTML =`News: </br> ${this.createNewsHtml()} </br>`;
		return newsTemplate;
	}
};