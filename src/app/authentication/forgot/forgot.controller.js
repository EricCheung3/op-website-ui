(function() {
    'use strict';

    angular
        .module('openprice.authentication')
        .controller('ForgotController', ForgotController);

    /* @ngInject */
    function ForgotController($scope, $state, $mdToast, $filter, $http, triSettings, apiService) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.user = {
            email: ''
        };
        vm.resetClick = resetClick;

        ////////////////

        function resetClick(reset) {
            apiService
                .getWebsiteResource()
                .then( function( websiteResource ) {
                    console.log("websiteResource", websiteResource);
                    return websiteResource.$post('forgetPassword', {}, reset);
                })
                .then(function(data) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('FORGOT.MESSAGES.RESET_SENT') + ' ' + reset.email)
                        .position('bottom right')
                        .action($filter('translate')('FORGOT.MESSAGES.LOGIN_NOW'))
                        .highlightAction(true)
                        .hideDelay(0)
                    ).then(function() {
                        $state.go('authentication.login');
                    });
                }).
                then(function() {
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('FORGOT.MESSAGES.NO_RESET') + ' ' + reset.email)
                        .position('bottom right')
                        .hideDelay(5000)
                    );
                });
        }
    }
})();
