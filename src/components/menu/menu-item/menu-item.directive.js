export default angular.module('menu.item.directive', [])
    .directive('menuItem', menuItem);

/* @ngInject */
function menuItem($rootScope) {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {
            label: '@',
            route: '@',
            icon: '@',
            active: '@'
        },
        link: link,
        require: '^menu',
        templateUrl: 'menu/menu-item/menu-item.html'
    };

    function link(scope, el, attr, ctrl) {
        scope.isActive = function () {
            return el === ctrl.getActiveElement();
        };

        if (scope.active === 'true') {
            ctrl.setActiveItem(el);
            ctrl.setRoute(scope.route);
        }

        el.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $rootScope.$broadcast('menu-toggle');

            scope.$apply(function () {
                ctrl.setActiveItem(el);
                ctrl.setRoute(scope.route);
            });
        });
    }
}
