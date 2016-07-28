(function() {

	var app = angular.module('affiliates');

	app.component('affiliateList', {
		templateUrl: '/components/list.html',
		controller: listController,
		controllerAs: 'lc'
	});

	listController.$inject = ['dataService'];

	function listController(dataService) {
		
		var lc = this;

	}

})();