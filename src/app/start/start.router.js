(function() {
'use strict';

	angular
	    .module('openprice.web')
	    .config(config);

  	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {

		$stateProvider
            .state('start', {
                url: '/',
                templateUrl: 'app/start/start.tmpl.html',
                controller : 'StartController',
                controllerAs : 'vm'
            })
            ;

	};

})();
