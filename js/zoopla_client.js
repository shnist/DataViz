var request = require('request');
var pubsub = require('node-pubsub');

/**
	@apiKey {String} API key for Zoopla
	@params {Object} Key:Value pair object for parameters
	@baseURL {String} Base URL for Zoopla api
*/
var Client = function (apiKey, params, baseURL) {
	'use strict';

	this.apiKey = apiKey;
	this.params = params;
	this.baseURL = baseURL;
	this.requestURL = '';
	this.response = {};

	this.constructURL();
};

Client.prototype.constructURL = function () {
	'use strict';

	this.requestURL = this.baseURL + '?api_key=' + this.apiKey;
	for(var key in this.params) {
		this.requestURL += '&' + key + '=' + this.params[key];
	}
};


Client.prototype.requestData = function () {
	'use strict';

	request({method: 'GET', uri: this.requestURL}, this.requestCallback);
};

Client.prototype.requestCallback = function (error, response, body) {
	'use strict';

	//console.log(error, response, body);
	if (!error && response.statusCode == 200) {
		pubsub.publish('received/json', [{data:body}]);
	} else {
		throw error;
	}
};

exports.Client = Client;