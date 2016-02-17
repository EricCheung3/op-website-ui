(function() {
    'use strict';

    angular
        .module('openprice.web')
        .config(securityConfig);

    /* @ngInject */
    function securityConfig($httpProvider) {
        $httpProvider.interceptors.push('tokenAuthInterceptor');
    }
})();
