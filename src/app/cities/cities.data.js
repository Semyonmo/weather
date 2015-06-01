import _ from 'lodash';

export default
angular.module('app.cities.data', [])
    .factory('citiesDataService', citiesDataService);


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

/* @ngInject */
//function citiesDataService($timeout, $q) {
//    "use strict";
//    var cities = [
//        {
//            _id: "0e3c530d-d4c3-43f4-a4e1-23441e1aa7b8",
//            title: "New York"
//        },
//        {
//            _id: "9c045928-19ae-4fe1-9737-6617e5f0d9ee",
//            title: "Moscow"
//        },
//        {
//            _id: "9817a9cb-b53c-4d02-bce2-e204949ed72f",
//            title: "Paris"
//        }
//    ];
//
//    return {
//        getCities: getCities,
//        setCity: setCity,
//        addCity: addCity,
//        closeCity: closeCity
//    };
//
//    function getCities() {
//        return $timeout(function () {
//            return cities;
//        }, 200);
//    }
//
//    function setCity(city, data) {
//        return $timeout(function () {
//            return true;
//
//            var index = _.findIndex(cities, function (currentCity) {
//                return currentCity._id === city._id;
//            });
//
//            cities[index] = _.extand(data, cities[index]);
//        }, 200);
//    }
//
//    function addCity(cityTitle, data) {
//        var deferred = $q.defer();
//
//        $timeout(function () {
//            var city = {
//                _id: guid(),
//                title: cityTitle
//            };
//
//            city = _.assign(data, city);
//
//            cities.push(city);
//
//            deferred.resolve(city);
//        }, 200);
//
//        return deferred.promise;
//    }
//
//    function closeCity(city) {
//        var deferred = $q.defer();
//
//        $timeout(function () {
//            _.remove(cities, function (currentCity) {
//                return currentCity._id === city._id;
//            });
//
//            var isRemoved = _.findIndex(cities, function (currentCity) {
//                    return currentCity._id === city._id;
//                }) > 0;
//
//            if (isRemoved) {
//                deferred.reject('item not remove');
//            } else {
//                deferred.resolve(city);
//            }
//
//        }, 200);
//
//        return deferred.promise;
//    }
//
//
//    function guid() {
//        function s4() {
//            return Math.floor((1 + Math.random()) * 0x10000)
//                .toString(16)
//                .substring(1);
//        }
//
//        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//            s4() + '-' + s4() + s4() + s4();
//    }
//}