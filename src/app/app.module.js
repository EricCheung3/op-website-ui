(function() {
    'use strict';

    angular
        .module('openprice.web', [
            'triangular',
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'ui.router', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart',
            'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular',
            'uiGmapgoogle-maps', 'hljs', 'md.data.table',
            'angular-hal',
            'openprice.common',
            'openprice.config',
            'openprice.authentication',
            'openprice.public',
            'openprice.dashboards'
        ])
        // create a constant for languages so they can be added to both triangular & translate
        .constant('APP_LANGUAGES', [{
            name: 'LANGUAGES.CHINESE',
            key: 'zh'
        },{
            name: 'LANGUAGES.ENGLISH',
            key: 'en'
        },{
            name: 'LANGUAGES.FRENCH',
            key: 'fr'
        },{
            name: 'LANGUAGES.PORTUGUESE',
            key: 'pt'
        }])
        ;
})();
