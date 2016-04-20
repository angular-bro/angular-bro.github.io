import angular from 'angular';
import 'app/scripts/templates';
import CodeBlockModule from 'app/code-block/module';
import { state } from 'app/root/state';
import { controller } from 'app/root/controller';

export default angular.module('root', [
    'ui.router',
    'templates-app',
    CodeBlockModule.name
])
.config(state)
.controller('RootCtrl', controller)
; // Ends the module declaration
