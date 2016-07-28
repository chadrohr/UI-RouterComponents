(function() {

	var app = angular.module('affiliates');

	app.factory('dataService', dataService);

	dataService.$inject = ['$http'];
	
	function dataService($http) {

		var data = [];
		
		$http.get('/services/data.json').then(
			function (response) {
				data = response.data;
			},
			function (error) {
				console.log('Data Error: ', error);
			}
		);
		
		return {
			getData: function () { return data; }
		};
	}
})();