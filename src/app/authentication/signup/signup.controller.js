(function() {
    'use strict';

    angular
        .module('openprice.authentication')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($scope, $state, $mdToast, $http, $filter, triSettings, apiService, API_CONFIG) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.signupClick = signupClick;
        vm.user = {
            username: '',
            email: '',
            password: '',
            confirm: ''
        };

        ////////////////

        function signupClick(registration) {

            apiService
                .getWebsiteResource()
                .then( function( websiteResource ) {
                    return websiteResource.$post('registration', {}, registration);
                })
                .then( function() {
                    $mdToast.show(
                      $mdToast.simple()
                      .content($filter('translate')('SIGNUP.MESSAGES.CONFIRM_SENT') + ' ' + registration.email)
                      .position('bottom right')
                      .action($filter('translate')('SIGNUP.MESSAGES.LOGIN_NOW'))
                      .highlightAction(true)
                      .hideDelay(0)
                    ).then(function(res) {
                        $state.go('authentication.login');
                    });

                })
                .catch( function(error) {
                    if (error.status === 409) {
                        $mdToast.show(
                            $mdToast.simple()
                            .content($filter('translate')('SIGNUP.MESSAGES.NO_SIGNUP'))
                            .position('bottom right')
                            .hideDelay(5000)
                        );

                    }
                });

        }
    }
})();
