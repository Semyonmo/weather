import 'angular';

import directive from './framework.directive.js';
import controller from './framework.controller.js';
import '../templates/templates.js';

import templates from '../templates/templates.module.js';

angular.module('framework', [
    directive.name, controller.name,

    'templates'
]);