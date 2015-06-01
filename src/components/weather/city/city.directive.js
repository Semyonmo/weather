export default angular.module('city.directive', [])
    .directive('city', city);

/* @ngInject */
function city($rootScope, $interval, $log, cityDataService) {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        link: link,
        controller: 'City',
        controllerAs: 'vm',
        templateUrl: 'weather/city/city.html'
    };

    function link(scope, el, attr, ctrl) {
        var defaultAutoUpdateValue = 25000;//25 sec

        if(scope.city.autoUpdateInterval < 1000 || scope.city.autoUpdateInterval == null) {
            scope.city.autoUpdateInterval = defaultAutoUpdateValue;
        }

        var updateTime = $interval(function () {
            ctrl.updateWeather(scope.city.address);
        }, scope.city.autoUpdateInterval);


        scope.$on("$destroy", function () {
            $interval.cancel(updateTime);
        });
    }
}
