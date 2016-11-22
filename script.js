let request = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=358b8ba532dc444f878cce74f34b7ffe'), init = {method:'GET',mode:'cors'};

fetch(request,init)
.then(respose => respose.json())
.then(data => 
{
	for (let  article of data.articles) { 
		let url = article.url;
		let title = article.title;
		let author = article.author;

		let urlTempalate = document.createElement("div");
		urlTempalate.innerHTML = `<a href='${url}'>${title}</a>`;

		let authorTemplate = document.createElement("div");
		authorTemplate.innerHTML = `<i>${author}</i>`

		document.getElementById("articles").appendChild(document.createTextNode("News"));
		document.getElementById("articles").appendChild(urlTempalate);
		document.getElementById("articles").appendChild(authorTemplate);
		document.getElementById("articles").appendChild(document.createElement("br"));

	};
})
.catch(err => console.log(err));