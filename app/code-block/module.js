import angular from 'angular';
import 'app/scripts/templates';
import { directive } from 'app/code-block/directive';
import { controller } from 'app/code-block/controller';

export default angular.module('codeBlock', [
    'templates-app'
])
.directive('codeBlock', directive)
.controller('CodeBlockCtrl', controller)
; // Ends the module declaration
