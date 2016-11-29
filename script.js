let filldocument = require('babel-loader!./filldocument');

	let request = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=358b8ba532dc444f878cce74f34b7ffe'), init = {method:'GET',mode:'cors'};

	fetch(request,init)
	.then(respose => respose.json())
	.then(data => {
		filldocument(data);
	})
.catch(err => console.log(err));

if (!PRODUCTION)
    console.log('Debug info')
if (PRODUCTION)
    console.log('Production log')