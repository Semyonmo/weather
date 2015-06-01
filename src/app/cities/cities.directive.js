export default angular.module('app.cities.directive', [])
    .directive('appCities', appCities);

/* @ngInject */
function appCities() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {

        },
        link: link,
        controller: 'AppCities',
        controllerAs: 'vm',
        templateUrl: 'cities/cities.html',
        bindToController: true
    };

    function link(scope, el, attr, ctrl) {

    }
}