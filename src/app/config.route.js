(function() {
    'use strict';

    angular
        .module('openprice.web')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        // Setup the apps routes

        // 404 & 500 pages
        $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: '404.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('public.home');
                };
            }
        })

        .state('500', {
            url: '/500',
            templateUrl: '500.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('public.home');
                };
            }
        });

        // always goto start if route not found
        $urlRouterProvider.otherwise('/');
    }
})();
