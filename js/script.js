'use strict';

let facade = require('./facade');

let request = facade.getRequest(), init = {method:'GET',mode:'cors'};

fetch(request,init)
	.then(respose => respose.json())
	.then(data => {
		facade.fill(data);
	})
//.catch(err => console.log(err));

if (!PRODUCTION){
	console.log('Debug info')
}
if (PRODUCTION){
    console.log('Production log')
}
