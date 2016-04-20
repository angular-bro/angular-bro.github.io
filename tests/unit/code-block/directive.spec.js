import 'app/scripts/templates';
import 'app/code-block/module';

describe('codeBlock Directive', function () {
    'use strict';

    var $compile, $rootScope;

    beforeEach(module('templates-app'));
    beforeEach(module('codeBlock'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
    }));

    it('exists', inject(function () {
        var element = $compile("<code-block></code-block>")($rootScope);

        // fire all the watches, so the scope expressions will be evaluated
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.html()).not.toContain('<code-block></code-block>');
    }));

    it('replaces html', inject(function () {
        var element = $compile("<code-block language='bash'>ls -la</code-block>")($rootScope);

        // fire all the watches, so the scope expressions will be evaluated
        $rootScope.$digest();

        expect(element.text()).toEqual('ls -la');
    }));
});
