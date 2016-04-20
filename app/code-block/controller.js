function Controller ($scope, $element, $attrs, $controller, transcludeFn) {
    'use strict';
    'ngInject';

    $scope.language = $attrs.language || 'markup';

    var text            = $scope.source || transcludeFn().text(),
        highlightedCode = Prism.highlight(text, Prism.languages[$scope.language] || Prism.languages.markup);

    $element.children('code:first-child').html(highlightedCode);
}

exports.controller = Controller;
