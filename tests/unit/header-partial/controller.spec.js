import 'app/header-partial/module';

describe('HeaderPartial Controller', function () {
    'use strict';

    var $controller;

    beforeEach(module('headerPartial'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('HeaderPartialCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
