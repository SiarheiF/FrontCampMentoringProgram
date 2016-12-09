'use strict';

let news = require('./news');

 module.exports.HtmlBuilder = class HtmlBuilder{
	 
	constructor(url, title, author){
		this.newsData = new news.news(url, title, author);
	}
	
	createTitleHtml(){
		let urlTempalate = document.createElement("div");
			urlTempalate.innerHTML = `<a href='${this.newsData.url}'>${this.newsData.title}</a>`;
			return urlTempalate.outerHTML;
	}
	
	createAuthorHtml(){
		let authorTemplate = document.createElement("div");
			authorTemplate.innerHTML = `<i>${this.newsData.author}</i>`;
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