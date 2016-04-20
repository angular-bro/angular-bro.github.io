function Controller ($scope) {
    'use strict';
    'ngInject';

    $scope.tree = [
        { name: 'app/', files: [
            { name: 'app.js', files: [] },
            { name: 'router.js', files: [] },
            { name: 'project-name.js', files: [] }
        ] },
        { name: 'tests/', files: []}
    ];
}

exports.controller = Controller;
