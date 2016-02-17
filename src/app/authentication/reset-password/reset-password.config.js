(function() {
'use strict';

    angular
        .module('openprice.authentication')
        .config(config);

  	/* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('reset-password', {
                url: '/resetPassword/:requestId',
                templateUrl: 'app/reset-password/reset-password.tmpl.html',
                controller : 'ResetPasswordController',
                controllerAs : 'vm'
            })
            ;

	};

})();
