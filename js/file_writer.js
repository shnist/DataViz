var fs = require('fs');
var pubsub = require('node-pubsub');

/**
	File writer - used to write the JSON from Zoopla into
	JSON files so that we're not constantly hitting the server
	. Zoopla's API limit is 120 requests per hour
	@param basePath {String} The base file path for writing the JSON
*/
var FileWriter = function (basePath) {
	'use strict';

	var that = this;

	this.baseFilePath = basePath;

	pubsub.subscribe('received/json', function (response) {
		that.writeFile(response.data, "barratt_development_57384");
	});
};

/**
	@param body {JSON} JSON response from Zoopla server
*/
FileWriter.prototype.writeFile = function (body, fileName) {
	'use strict';

	fs.writeFile(this.baseFilePath + fileName + '.json', body, function (err) {
		if (err) {
			throw err;
		} else {
			console.log('Its saved!');
		}
	});

};

exports.FileWriter = FileWriter;