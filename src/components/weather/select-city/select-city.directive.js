export default angular.module('city.select.directive', [])
    .directive('selectCity', selectCity);

/* @ngInject */
function selectCity($compile) {
    "use strict";

    return {
        restrict: 'EA',
        link: link,
        scope: {
            select: "="
        },
        controllerAs: 'vm',
        templateUrl: 'weather/select-city/select-city.html'
    };

    function link(scope, el, attr) {
        //GMAP AutoComplite
        var options = {
            types: ['(cities)']
        };
        scope.gPlace = new google.maps.places.Autocomplete(el[0], options);

        google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
            var place = scope.gPlace.getPlace();

            var address = getAddressOfPlace(place.address_components);

            scope.$apply(function () {
                scope.select['title']= scope.gPlace.getPlace().name;
                scope.select['address'] = address;
            });
        });

        scope.$on('$destroy', function () {
            google.maps.event.clearListeners(scope.gPlace, 'place_changed');
        });
        //GMAP AutoComplite-END
    }

    function getAddressOfPlace(placeAddressComponents) {
        var locality = "";
        var country = "";

        /**
         * Get city name
         */
        for (var i = 0; i < placeAddressComponents.length; i++) {
            if (placeAddressComponents[i].types[0] === 'locality') {
                locality = placeAddressComponents[i].long_name;
                break;
            }
        }

        /**
         * Get country name
         */
        for (var j = 0; j < placeAddressComponents.length; j++) {
            if (placeAddressComponents[j].types[0] === 'country') {
                country = placeAddressComponents[j].long_name;
                break;
            }
        }

        return `${locality}, ${country}`;
    }
}
