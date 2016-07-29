(function() {

	var app = angular.module('affiliates');

	app.component('affiliateList', {
		templateUrl: '/components/list.html',
		controller: listController,
		controllerAs: 'lc'
	});

	listController.$inject = ['$state', 'dataService'];

	function listController($state, dataService) {
		
		var lc = this;
		
		lc.topAffiliates = dataService.getData().sort(function (a, b) {
			return parseFloat(b.sales.replace('$', '')) - parseFloat(a.sales.replace('$', ''));
		}).slice(0, 24);

		lc.showProfile = function (id) {
			$state.go('profile', { affiliateId: id });
		}		
	}

})();