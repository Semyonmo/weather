import 'angular';

import directive from './weather.directive.js';
import controller from './weather.controller.js';

import cityController from './city/city.controller.js';
import cityDirective from './city/city.directive.js';
import cityDataService  from './city/city.data.js';

import selectCityDirective from './select-city/select-city.directive.js';

import '../templates/templates.js';

angular.module('weather', [
    controller.name, directive.name,

    cityDirective.name, cityController.name, cityDataService.name,

    selectCityDirective.name,

    'templates'
]);