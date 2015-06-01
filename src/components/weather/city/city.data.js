export default
angular.module('city.data', [])
    .factory('cityDataService', cityDataService);

/* @ngInject */
function cityDataService($http, $log) {
    "use strict";

    return {
        getWeather: getWeather
    };

    function getWeather(city) {
        var api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

        return $http.get(api)
            .then(getWeatherComplete)
            .catch(getWeatherFailed);

        function getWeatherComplete(response) {
            if (response.data.cod === "404") {
               return {
                   name: 'not found',
                   icon: 'not found',
                   temp: 'not found',
                   state: 'Error: not found'
               }
            }
            return {
                name: response.data.name,
                icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
                temp: `${response.data.main.temp}C`,
                state: response.data.weather[0].main
            }
        }

        function getWeatherFailed(error) {
            $log.error('XHR Failed for getWeather.' + error.data);
        }
    }
}