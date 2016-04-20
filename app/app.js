import angular from 'angular';
import 'app/router';
import angularBroGithubIoModule from 'app/angular-bro-github-io';
import footerPartialModule from 'app/footer-partial/module';
import headerPartialModule from 'app/header-partial/module';
import sideNavigationModule from 'app/side-navigation/module';

var app = angular.module('app', [
    'router',
    'ngMaterial',
    angularBroGithubIoModule.name,
    footerPartialModule.name,
    headerPartialModule.name,
    sideNavigationModule.name,
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [
        app.name
    ], {
        strictDi: true
    });
});
