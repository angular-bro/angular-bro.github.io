import 'app/footer-partial/module';

describe('FooterPartial Controller', function () {
    'use strict';

    var $controller;

    beforeEach(module('footerPartial'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('FooterPartialCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
