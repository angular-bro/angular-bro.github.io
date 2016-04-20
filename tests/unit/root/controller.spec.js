import 'app/root/module';

describe('Root Controller', function () {
    'use strict';

    var $controller;

    beforeEach(module('root'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('RootCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
