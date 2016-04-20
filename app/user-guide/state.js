import { controller } from 'app/user-guide/controller';

function State ($stateProvider) {
    'use strict';
    'ngInject';

    $stateProvider.state('user-guide', {
        url: '/user-guide',
        templateUrl: 'user-guide/template.html',
        controller: controller
    });
}

exports.state = State;
