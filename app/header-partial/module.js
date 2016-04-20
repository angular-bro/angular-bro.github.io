import angular from 'angular';
import 'app/scripts/templates';
import { directive } from 'app/header-partial/directive';
import { controller } from 'app/header-partial/controller';

export default angular.module('headerPartial', [
    'templates-app'
])
.directive('headerPartial', directive)
.controller('HeaderPartialCtrl', controller)
; // Ends the module declaration
