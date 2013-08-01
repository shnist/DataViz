$(function () {
	
	$.ajax({
		url: 'http://api.zoopla.co.uk/api/v1/property_listings.js',
		data: {
			"api_key": "mz26trd9n5se8dd4dyra5unz",
			"area": "Oxford",
			"jsonp": "processData"
		},
		dataType: 'jsonp',
		jsonpCallback: 'processData',
		success: function (data) {
			console.log(data);
			$('.container').append(JSON.stringify(data));
		},
		error: function (data) {
			console.log('error', data);

		}
	});

});