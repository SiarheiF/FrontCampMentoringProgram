'use strict';

let filldocument = require('babel-loader!./filldocument');
let requestSingleton = require('./requestSingleton');

module.exports.fill = function(data){
	filldocument(data);
}

module.exports.getRequest = function(){
	return requestSingleton.RequestSingleton.getInstance();
}