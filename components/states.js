(function() {

	var app = angular.module('affiliates');

	app.component('states', {
		templateUrl: '/components/states.html',
		controller: statesController,
		controllerAs: 'sc'
	});

	statesController.$inject = ['$state', 'dataService'];

	function statesController($state, dataService) {
        var sc = this;

        let stateTotals = {};

        dataService.getData().forEach(function (item) {
            if (stateTotals[item.state]) {
                stateTotals[item.state].sales += parseFloat(item.sales.replace('$', ''));
            }
            else {
                stateTotals[item.state] = {
                    state: item.state,
                    sales: parseFloat(item.sales.replace('$', ''))
                }
            }
        })
        sc.topStates = Object.values(stateTotals).sort((a, b) => { return b.sales - a.sales }).slice(0, 9);
    }


})();