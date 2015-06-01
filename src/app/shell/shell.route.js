export default angular.module('app.shell.route', [])
    .config(config)

/* @ngInject */
function config($routeProvider) {
    "use strict";

    $routeProvider
        .when('/cities', {
            template: `<app-cities></app-cities>`,
            controller: 'Shell',
            controllerAs: 'vm'
        }).when('/about', {
            template: `<h1>Author</h1><h3>Semyon Morozov</h3><a href="mailto:mainmatsu@gmail.com">mainmatsu@gmai.com</a>`,
            controller: 'Shell',
            controllerAs: 'vm'
        }).when('/info', {
            template: `<h1>Info</h1>`,
            controller: 'Shell',
            controllerAs: 'vm'
        });

    $routeProvider.otherwise({redirectTo: '/cities'});
}