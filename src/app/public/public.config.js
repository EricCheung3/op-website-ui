(function() {
    'use strict';

    angular
        .module('openprice.public')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/public');

        $stateProvider
        .state('public', {
            abstract: true,
            templateUrl: 'app/public/public.tmpl.html'
        })
        .state('public.home', {
            url: '/home',
            views: {
                toolbar: {
                    templateUrl: 'app/public/public.toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    templateUrl: 'app/public/home.tmpl.html'
                },
                footer: {
                    templateUrl: 'app/public/public.footer.tmpl.html'
                }
            }
        })
        .state('public.about', {
            url: '/about',
            views: {
                toolbar: {
                    templateUrl: 'app/public/public.toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    templateUrl: 'app/public/about.tmpl.html'
                },
                footer: {
                    templateUrl: 'app/public/public.footer.tmpl.html'
                }
            }
        })
        .state('public.team', {
            url: '/team',
            views: {
                toolbar: {
                    templateUrl: 'app/public/public.toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    templateUrl: 'app/public/team.tmpl.html'
                },
                footer: {
                    templateUrl: 'app/public/public.footer.tmpl.html'
                }
            }
        })
        ;

    }
})();
