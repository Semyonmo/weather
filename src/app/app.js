import "angular";

import core from './core/core.module.js';
import shell from './shell/shell.module.js';
import cities from './cities/cities.module.js';

//import components
import 'framework';
import 'menu';
import 'weather';

///* @ngInject */
angular.module('app', [
    //Modules
    core.name,

    //Features
    shell.name, cities.name,

    //Components
    'framework',
    'menu',
    'weather'
]);


