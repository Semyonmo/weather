export default angular.module('weather.directive', [])
    .directive('weather', weather);

/* @ngInject */
function weather() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {
            title: '@',
            cities: '='
        },
        link: link,
        controller: 'Weather',
        controllerAs: 'vm',
        templateUrl: 'weather/weather.html',
        bindToController: true
    };

    function link(scope, el, attr, ctrl) {

    }
}