import angular from 'angular';
import 'app/scripts/templates';
import { state } from 'app/user-guide/state';
import { controller } from 'app/user-guide/controller';
import DirectoryTreeModule from 'app/directory-tree/module';

export default angular.module('userGuide', [
    'templates-app',
    DirectoryTreeModule.name
])
.config(state)
.controller('UserGuideCtrl', controller)
; // Ends the module declaration
