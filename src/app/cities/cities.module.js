import 'angular';

import core from 'app/core/core.module.js';

import controller  from './cities.controller.js';
import directive from './cities.directive.js';
import data from './cities.data.js';

export default angular.module('app.cities',[
    core.name,

    //Module
    controller.name, directive.name, data.name
]);