import { controller } from 'app/root/controller';

function State ($stateProvider) {
    'use strict';
    'ngInject';

    $stateProvider.state('root', {
        url: '/',
        templateUrl: 'root/template.html',
        controller: controller
    });
}

exports.state = State;
