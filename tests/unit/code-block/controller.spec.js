import angular from 'angular';
import 'app/code-block/module';

describe('CodeBlock Controller', function () {
    'use strict';

    var $controller, $scope, $element;

    beforeEach(module('codeBlock'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $element = angular.element('<div></div>');
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('CodeBlockCtrl', {
            $scope: $scope,
            $element: $element,
            $attrs: {
                language: 'markup'
            },
            transcludeFn: function () {
                return {
                    text: function () { return ''; }
                };
            }
        });

        expect(controller).toBeDefined();
    }));
});
