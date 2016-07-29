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

		var maleSales = data.reduce(function (total, item) {
			if (item.gender === 'Male') {
				return total + parseFloat(item.sales.replace('$', ''));
			}	
			return total;
		}, 0);

		db.sales = '$' + (sales / 1000000).toFixed(2) + 'M';
		db.salesProgress = Math.round(sales / 5000000 * 100);
		
		var stateSalesDictionary = {};
		var stateSales = [];

		data.forEach(function (item) {

			var stateTotal = stateSalesDictionary[item.state] || 0;

			stateTotal += parseFloat(item.sales.replace('$', ''));

			stateSalesDictionary[item.state] = stateTotal;

			return item;
		});

		console.log('State Sales Dictionary: ', stateSalesDictionary);
		
		for (var prop in stateSalesDictionary) {
			stateSales.push({
				state: prop,
				sales: stateSalesDictionary[prop]
			});
		}

		console.log('State Sales: ', stateSales);

	}

})();