(function () {

	var app = angular.module('affiliates', ['ui.router']);

	app.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				component: 'dashboard'
			})
			.state('list', {
				url: '/list',
				component: 'affiliateList'
			});
	});

	app.controller('appController', appController);

	appController.$inject = ['dataService'];

	function appController(dataService) {

	}
})();