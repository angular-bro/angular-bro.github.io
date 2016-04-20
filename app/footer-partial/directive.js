import { controller } from 'app/footer-partial/controller';

function Directive () {
    'use strict';
    'ngInject';

    return {

        restrict: 'AECM',
        templateUrl: 'footer-partial/template.html',
        controller: controller

    };
}

exports.directive = Directive;
