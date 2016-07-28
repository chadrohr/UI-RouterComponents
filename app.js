(function () {

	var app = angular.module('affiliates', ['ui.router']);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				component: 'dashboard'
			})
			.state('list', {
				url: '/list',
				component: 'affiliateList'
			})
			.state('profile', {
				url: '/profile/:affiliateId',
				component: 'profile'
			})
			.state('applications', {
				url: '/applications',
				component: 'applications'
			});
	}]);

	app.controller('appController', appController);

	appController.$inject = ['dataService'];

	function appController(dataService) {

	}
})();