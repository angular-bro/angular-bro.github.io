import { controller } from 'app/header-partial/controller';

function Directive () {
    'use strict';
    'ngInject';

    return {

        restrict: 'AECM',
        templateUrl: 'header-partial/template.html',
        controller: controller

    };
}

exports.directive = Directive;
