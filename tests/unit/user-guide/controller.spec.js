import 'app/user-guide/module';

describe('UserGuide Controller', function () {
    'use strict';

    var $controller;

    beforeEach(module('userGuide'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('UserGuideCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
