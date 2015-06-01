import _ from 'lodash';

export default angular.module('app.cities.controller', [])
    .controller('AppCities', AppCities);

/* @ngInject */
function AppCities(citiesDataService, $scope) {
    "use strict";
    var vm = this;
    vm.cities = {};
    vm.title = "Weather";

    activate();

    function activate() {
        citiesDataService.getCities().then(function (data) {
            vm.cities = data;
        });

        $scope.$on('weather-city-close-event', function (e, data) {
            citiesDataService.closeCity(data.id).then(function () {
                _.remove(vm.cities, function(currentObject) {
                    return currentObject.id === data.id;
                });
            })
        });

        $scope.$on('weather-city-add-event', function (e, data) {
            citiesDataService.addCity(data).then(function (result) {
                vm.cities.push(result);
            })
        });
    }
}