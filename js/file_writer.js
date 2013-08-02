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
	this.fileName = '';

	pubsub.subscribe('received/json', function (response) {
		console.log('write')
		that.writeFile(response.data);
	});
};

/**
	@param body {JSON} JSON response from Zoopla server
*/
FileWriter.prototype.writeFile = function (body) {
	'use strict';

	console.log('write file', this.fileName);

	fs.writeFile(this.baseFilePath + this.fileName + '.json', body, function (err) {
		if (err) {
			throw err;
		} else {
			console.log('Its saved!');
		}
	});

};

/**
	@param name {String} branch number that forms the unique id of the file name
*/
FileWriter.prototype.assignNewName = function (name) {
	this.fileName = 'barratt_development_' + name;
}

exports.FileWriter = FileWriter;