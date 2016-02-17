(function() {
    'use strict';

    angular
        .module('openprice.dashboards')
        .directive('loadDataWidget', loadDataWidget);

    /* @ngInject */
    function loadDataWidget($parse, $http, $mdDialog) {
        // Usage:
        //
        // <tri-widget load-data-widget="{ variableName: urlOfJSONData }"></tri-widget>
        // Creates:
        //
        var directive = {
            require: 'triWidget',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);
            var loadData = $parse(attrs.loadDataWidget)($scope);

            widgetCtrl.setMenu({
                icon: 'icon-more-vert',
                items: [{
                    icon: 'icon-search',
                    title: 'DASHBOARDS.WIDGETS.MENU.DETAILS',
                    click: function($event) {
                        var data = [];
                        angular.forEach(loadData, function(url, variable) {
                            data = $scope[variable];
                        });
                        $mdDialog.show({
                            controller: LoadDataDialogController,
                            templateUrl: 'app/examples/dashboards/widgets/widget-load-data-dialog.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                data: data
                            },
                            clickOutsideToClose: true
                        })
                        .then(function(answer) {
                            $scope.alert = 'You said the information was "' + answer + '".';
                        }, function() {
                            $scope.alert = 'You cancelled the dialog.';
                        });
                    }
                },{
                    icon: 'icon-share',
                    title: 'DASHBOARDS.WIDGETS.MENU.SHARE'
                },{
                    icon: 'icon-print',
                    title: 'DASHBOARDS.WIDGETS.MENU.PRINT'
                }]
            });

            ///////////////////

            /* @ngInject */
            function LoadDataDialogController($scope, $mdDialog, data) {
                $scope.data = data;

                $scope.closeDialog = function() {
                    $mdDialog.cancel();
                };
            }

            angular.forEach(loadData, function(url, variable) {
                $http.get(url).
                success(function(data) {
                    var header = data.shift();
                    widgetCtrl.setLoading(false);
                    $scope[variable] = {
                        header: header,
                        data: data
                    };
                });
            });
        }
    }
})();
