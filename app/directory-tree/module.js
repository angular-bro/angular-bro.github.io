import angular from 'angular';
import 'app/scripts/templates';
import { directive } from 'app/directory-tree/directive';
import { controller } from 'app/directory-tree/controller';

export default angular.module('directoryTree', [
    'templates-app'
])
.directive('directoryTree', directive)
.controller('DirectoryTreeCtrl', controller)
; // Ends the module declaration
