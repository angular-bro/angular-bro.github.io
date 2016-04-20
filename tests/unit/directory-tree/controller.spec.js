import 'app/directory-tree/module';

describe('DirectoryTree Controller', function () {
    'use strict';

    var $controller;

    
    beforeEach(module('directoryTree'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('exists', inject(function ($controller) {
        var controller = $controller('DirectoryTreeCtrl', {
        });

        expect(controller).toBeDefined();
    }));
});
