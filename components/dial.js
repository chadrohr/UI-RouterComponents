(function() {

	var app = angular.module('affiliates');

	app.component('dialGraph', {
		templateUrl: '/components/dial.html',
		controller: dialController,
		controllerAs: 'dc',
		bindings: {
			caption: '@',
			count: '<',
			percentage: '<',
			radius: '<',
			strokeWidth: '<'
		}
	});

	dialController.$inject = [];

	function dialController() {
		
		var dc = this;

		dc.width = dc.radius * 2;
		dc.height = dc.radius * 2;
		dc.viewBox = '0 0 ' + dc.width.toString() + ' ' + dc.height.toString();
		dc.innerRadius = dc.radius - dc.strokeWidth / 2;
		dc.dashArray = dc.innerRadius * Math.PI * 2;
		dc.dashOffset = dc.dashArray - dc.dashArray * dc.percentage / 100;

	}

})();