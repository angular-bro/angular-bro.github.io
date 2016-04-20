import angular from 'angular';
import 'app/scripts/templates';
import { directive } from 'app/side-navigation/directive';
import { controller } from 'app/side-navigation/controller';

export default angular.module('sideNavigation', [
    'templates-app'
])
.directive('sideNavigation', directive)
.controller('SideNavigationCtrl', controller)
;
