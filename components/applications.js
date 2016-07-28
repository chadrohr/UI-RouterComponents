(function() {

	var app = angular.module('affiliates');

	app.component('applications', {
		templateUrl: '/components/applications.html',
		controller: applicationsController,
		controllerAs: 'ac'
	});

	applicationsController.$inject = ['dataService'];

	function applicationsController(dataService) {
		
		var ac = this;

	}

})();