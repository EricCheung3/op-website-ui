(function() {
    'use strict';

    angular
        .module('openprice.web')
        .run(run);

    /* @ngInject */
    function run($rootScope, $state, $stateParams, apiService, EnvironmentConfig) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        apiService.init(EnvironmentConfig.api);

        $rootScope.logout = function() {
            apiService.clear();
            $state.go('authentication.login');
        };
    };

})();
