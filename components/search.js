(function() {

	var app = angular.module('affiliates');	

	app.component('search', {
		templateUrl: '/components/search.html',
		controller: searchController,
		controllerAs: 'sc'
	});

	searchController.$inject = ['$state', '$stateParams', 'dataService'];

	function searchController($state, $stateParams, dataService) {
		
		var sc = this;

		var query = $stateParams.query;

		sc.results = dataService.getData().filter(function (item) {

			var text = item.firstName + '-' +
				item.lastName + '-' +
				item.email + '-' +
				item.address + '-' +
				item.city + '-' +
				item.state + '-' +
				item.app;
			
			if (text.toLowerCase().includes(query.toLowerCase())) {
				return true;
			}

			return false;
		});

		sc.showProfile = function (id) {
			$state.go('profile', { affiliateId: id });
		}
	}

})();