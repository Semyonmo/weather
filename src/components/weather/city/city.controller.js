export default angular.module('city.controller', [])
    .controller('City', City);

/* @ngInject */
function City($scope, $rootScope, $log, $timeout, cityDataService) {
    "use strict";
    var vm = this;

    vm.weather = {};

    activate();

    function activate() {
        cityDataService.getWeather($scope.city.address).then(function (data) {
            vm.weather = data;

            $log.info(`${data.name} weather data: load`);
        });
    }

    vm.close = function (id) {
        $rootScope.$broadcast('weather-city-close-event', {
            id: id
        });
    };

    vm.updateWeather = function (address) {
        cityDataService.getWeather(address).then(function (data) {
            vm.weather = data;

            $log.info(`${data.name} weather data: updated`);
        });
    };
}