(function () {
'use strict';

    angular
        .module('openprice.common')
        .factory('apiService', apiService);

    /* @ngInject */
    function apiService($rootScope, $http, halClient, tokenStorage) {
        var serverHost = null;
        var websiteResource = null,
            userResource = null;

        return {
            'init' : init,
            'authenticate' : authenticate,
            'clear' : clear,
            'reload' : reload,
            'getResource' : getResource,
            'getWebsiteResource' : getWebsiteResource,
            'getUserResource' : getUserResource
        };

        function init(host) {
            serverHost = host;
        };

        function authenticate(credentials, callback) {
            console.log('apiService.authenticate() for '+credentials.username);

            $http.post(serverHost + '/api/signin', credentials)
                .success( function(data, status, headers){
                    tokenStorage.store(headers('X-AUTH-TOKEN'));
                    reload(); // refresh websiteResource after login
                    callback && callback(true);
                })
                .error( function() {
                    $rootScope.authenticated = false;
                    callback && callback(false);
                });
        };

        function clear() {
            $rootScope.authenticated = false;
            $rootScope.currentUser = null;
            tokenStorage.clear();
        };

        function reload() {
            websiteResource =
                halClient
                    .$get(serverHost + '/api')
                    .then( function( resource ) {
                        $rootScope.authenticated = resource.authenticated;
                        $rootScope.currentUser = resource.currentUser;
                        return resource;
                    });
        };

        function getResource(resourceUrl) {
            return halClient.$get(resourceUrl);
        };

        function getWebsiteResource() {
            if (websiteResource == null) {
                console.log("First time to get websiteResource from server!");
                reload();
            }
            return websiteResource;
        };

        function getUserResource() {
            if (userResource == null) {
                userResource = halClient.$get(serverHost + '/api/user');
            }
            return userResource;
        };
    };
})();
