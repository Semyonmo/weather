export default angular.module('weather.controller', [])
    .controller('Weather', Weather);

/* @ngInject */
function Weather($rootScope) {
    "use strict";
    var vm = this;

    vm.intervalsList = [
        {
            value: 5000,
            label: "5 sec"
        },
        {
            value: 25000,
            label: "25 sec"
        },
        {
            value: 60000,
            label: "60 sec"
        }
    ];

    vm.newCity = {
        title: '',
        address: '',
        autoUpdateInterval: vm.intervalsList[1].value
    };

    vm.addCity = function (city) {
        $rootScope.$broadcast('weather-city-add-event', city);
    };
}