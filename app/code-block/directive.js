import { controller } from 'app/code-block/controller';

function Directive () {
    'use strict';
    'ngInject';

    return {

        restrict: 'AEC',
        transclude: 'code',
        templateUrl: 'code-block/template.html',
        scope: {
            source: '<'
        },
        link: controller

    };
}

exports.directive = Directive;
