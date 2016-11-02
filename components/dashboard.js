(function() {

	var app = angular.module('affiliates');

	app.component('dashboard', {
		templateUrl: '/components/dashboard.html',
		controller: dashboardController,
		controllerAs: 'db'
	});

	dashboardController.$inject = ['dataService'];

	function dashboardController(dataService) {

		var db = this;

		var data = dataService.getData();
		
		var sales = data.reduce(function (total, item) {
			return total + parseFloat(item.sales.replace('$', ''));
		}, 0);

		db.sales = '$' + (sales / 1000000).toFixed(2) + 'M';
		db.salesProgress = Math.round(sales / 5000000 * 100);

		// calculate sales by men		

		// calculate sales by women
		
		// calculate sales by top state

	}

})();