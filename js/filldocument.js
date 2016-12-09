'use strict';

let htmlBuilder = require('./htmlBuilder');

module.exports = function(data){
	for (let  article of data.articles) { 
			var builder = new htmlBuilder.HtmlBuilder(article.url, article.title, article.author);
			document.getElementById("articles").appendChild(builder.htmlBuild());
		};
};
