'use strict';

let instance = null;

module.exports.RequestSingleton = class RequestSingleton {
	static getInstance(){
		if(!instance){
			instance = new Request('https://newsapi.org/v1/articles?source=bbc-news&apiKey=358b8ba532dc444f878cce74f34b7ffe');
		}

	return instance;
	}
};