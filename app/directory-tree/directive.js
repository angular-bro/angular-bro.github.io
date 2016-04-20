import { controller } from 'app/directory-tree/controller';

function Directive () {
    'use strict';
    'ngInject';

    return {

        restrict: 'AECM',
        templateUrl: 'directory-tree/template.html',
        controller: controller,
        scope: {
            files: '<'
        }

    };
}

exports.directive = Directive;
