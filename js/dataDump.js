$(function () {

	$.each(barratt_bristol, function (index, branch_id){
		$.ajax({
			url: 'http://api.zoopla.co.uk/api/v1/property_listings.js',
			data: {
				"api_key": "mz26trd9n5se8dd4dyra5unz",
				"jsonp": "processData",
				"branch_id": "53553"
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
});