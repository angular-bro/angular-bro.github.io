import 'app/side-navigation/module';

describe('SideNavigation Controller', function () {
    'use strict';

    var $controller;

    beforeEach(module('sideNavigation'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('SideNavigationCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
