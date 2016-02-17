(function() {
    'use strict';

    angular
        .module('openprice.authentication')
        .controller('ResetPasswordController', ResetPasswordController);

    /* @ngInject */
    function ResetPasswordController($scope, $state, $stateParams, $mdToast, $filter, triSettings, apiService) {
        var vm = this;
        vm.requestId = $stateParams.requestId;
        vm.triSettings = triSettings;
        vm.reset = {
            newPassword: '',
            confirmPassword: ''
        };
        vm.saveClick = saveClick;

        ////////////////

        function saveClick(reset) {
            apiService
            .getWebsiteResource()
            .then( function( websiteResource ) {
                return websiteResource.$put('resetPassword', {requestId: vm.requestId}, reset);
            })
            .then(function(data) {
                console.log("response", data);
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('RESET.MESSAGES.RESET_SUCCESS'))
                    .position('bottom right')
                    .action($filter('translate')('RESET.MESSAGES.LOGIN_NOW'))
                    .highlightAction(true)
                    .hideDelay(0)
                ).then(function() {
                    $state.go('authentication.login');
                });
            }).
            then(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('RESET.MESSAGES.NO_RESET')) // TODO display error message
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });

        }
    }
})();
