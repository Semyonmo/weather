import _ from 'lodash';

export default
angular.module('app.cities.data', [])
    .factory('citiesDataService', 'logger', citiesDataService);


/* @ngInject */
function citiesDataService($http) {
    "use strict";

    var api = "http://localhost:4500";

    return {
        getCities: getCities,
        setCity: setCity,
        addCity: addCity,
        closeCity: closeCity
    };

    function getCities() {
        return $http.get(api + '/cities')
            .then(getCitiesComplete)
            .catch(getCitiesFailed);

        function getCitiesComplete(response) {
            return response.data;
        }

        function getCitiesFailed(error) {
            logger.error('XHR Failed for getCities.' + error.data);
        }
    }

    function addCity(data) {
        return $http.post(api + '/cities', data)
            .then(postCityComplete)
            .catch(postCityFailed);

        function postCityComplete(response) {
            return response.data;
        }

        function postCityFailed(error) {
            logger.error('XHR Failed for postCity.' + error.data);
        }
    }

    function setCity() {
        return $http.get(api + '/cities');
    }


    function closeCity(id) {
        return $http.delete(`${api}/cities/${id}`)
            .then(deleteCityComplete)
            .catch(deleteCityFailed);

        function deleteCityComplete(response) {
            return response.data;
        }

        function deleteCityFailed(error) {
            logger.error('XHR Failed for deleteCity.' + error.data);
        }
    }
}
