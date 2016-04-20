import angular from 'angular';
import config from 'config/environment';
import RootModule from 'app/root/module';
import UserGuideModule from 'app/user-guide/module';

angular.module('router', [
    'ui.router',
    RootModule.name,
    UserGuideModule.name,
])
.config(function ($locationProvider, $urlRouterProvider) {
    "ngInject";
    "use strict";

    $locationProvider.html5Mode(config.html5Mode);
    $urlRouterProvider.otherwise('/');
});
