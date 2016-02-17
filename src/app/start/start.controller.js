(function() {
'use strict';

    angular
        .module('openprice.web')
        .controller('StartController', StartController);

    /* @ngInject */
    function StartController($log, $rootScope, $state, apiService ) {
        $log.debug('==> StartController');

        loadCurrentSigninUser();

        function loadCurrentSigninUser() {
            apiService
                .getWebsiteResource()
                .then( function( websiteResource ) {
                    if (websiteResource.authenticated) {
                        $log.debug("already logged in, go to user dashboard");
                        $rootScope.authenticated = true;
                        $rootScope.currentUser = websiteResource.currentUser;
                        $state.go("triangular.admin-default.dashboard-general");
                    } else {
                        $rootScope.authenticated = false;
                        $rootScope.currentUser = null;
                        $log.debug("Not logged in, go to pulbic home page");
                        $state.go("public.home");
                    }
                });
        };

    };

})();
