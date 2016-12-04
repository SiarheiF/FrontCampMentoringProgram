'use strict';

var request = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=358b8ba532dc444f878cce74f34b7ffe'),
    init = { method: 'GET', mode: 'cors' };

fetch(request, init).then(function (respose) {
		return respose.json();
}).then(function (data) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
				for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var article = _step.value;

						var url = article.url;
						var title = article.title;
						var author = article.author;

						var urlTempalate = document.createElement("div");
						urlTempalate.innerHTML = '<a href=\'' + url + '\'>' + title + '</a>';

						var authorTemplate = document.createElement("div");
						authorTemplate.innerHTML = '<i>' + author + '</i>';

						document.getElementById("articles").appendChild(document.createTextNode("News"));
						document.getElementById("articles").appendChild(urlTempalate);
						document.getElementById("articles").appendChild(authorTemplate);
						document.getElementById("articles").appendChild(document.createElement("br"));
				}
		} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
		} finally {
				try {
						if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
						}
				} finally {
						if (_didIteratorError) {
								throw _iteratorError;
						}
				}
		}

		;
}).catch(function (err) {
		return console.log(err);
});
