import { controller } from 'app/side-navigation/controller';

function Directive () {
    'use strict';
    'ngInject';

    return {

        restrict: 'AECM',
        templateUrl: 'side-navigation/template.html',
        controller: controller

    };
}

exports.directive = Directive;
