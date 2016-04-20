import 'app/scripts/templates';
import 'app/directory-tree/module';

describe('directoryTree Directive', function () {
    'use strict';

    var $compile, $rootScope;

    beforeEach(module('templates-app'));
    beforeEach(module('directoryTree'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
    }));

    it('exists', inject(function () {
        var element = $compile("<directory-tree></directory-tree>")($rootScope);

        // fire all the watches, so the scope expressions will be evaluated
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.html()).not.toContain('<directory-tree></directory-tree>');
    }));

    it('replaces html', inject(function () {
        var element = $compile("<directory-tree></directory-tree>")($rootScope);

        // fire all the watches, so the scope expressions will be evaluated
        $rootScope.$digest();

        expect(element.find('div')).toBeDefined();
        expect(element.find('div').text()).toEqual('directoryTree');
    }));
});
