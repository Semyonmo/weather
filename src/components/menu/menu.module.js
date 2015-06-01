import 'angular';

import directive from './menu.directive.js';
import controller from './menu.controller.js';

import itemDirective from './menu-item/menu-item.directive.js';
import itemGroupDirective from './menu-group/menu-group.directive.js';

import '../templates/templates.js';

angular.module('menu', [
    directive.name, controller.name,

    itemDirective.name, itemGroupDirective.name,

    'templates'
]);