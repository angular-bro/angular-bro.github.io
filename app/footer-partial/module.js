import angular from 'angular';
import 'app/scripts/templates';
import { directive } from 'app/footer-partial/directive';
import { controller } from 'app/footer-partial/controller';

export default angular.module('footerPartial', [
    'templates-app'
])
.directive('footerPartial', directive)
.controller('FooterPartialCtrl', controller)
; // Ends the module declaration
