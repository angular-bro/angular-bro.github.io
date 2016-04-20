import angular from 'angular';
import 'app/router';
import angularBroGithubIoModule from 'app/angular-bro-github-io';

var app = angular.module('app', [
    'router',
    angularBroGithubIoModule.name
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [
        app.name
    ], {
        strictDi: true
    });
});
