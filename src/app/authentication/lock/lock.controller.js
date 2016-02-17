(function() {
    'use strict';

    angular
        .module('openprice.authentication')
        .controller('LockController', LockController);

    /* @ngInject */
    function LockController($state, triSettings) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.user = {
            name: 'Morris Onions',
            email: 'info@oxygenna.com',
            password: ''
        };
        vm.triSettings = triSettings;

        ////////////////

        // controller to handle login check
        function loginClick() {
            // user logged in ok so goto the dashboard
            // TODO call apiService
            $state.go('triangular.admin-default.dashboard-general');
        }
    }
})();
