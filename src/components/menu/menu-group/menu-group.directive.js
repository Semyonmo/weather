export default angular.module('menu-group.directive', [])
    .directive('menuGroup', menuGroup);

/* @ngInject */
function menuGroup() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {
            label: '@',
            icon: '@'
        },
        link: link,
        require: '^menu',
        templateUrl: 'menu/menu-group/menu-group.html'
    };

    function link(scope, el, attr, ctrl) {
        scope.isOpen = false;

        scope.toggleGroup = function () {
            scope.isOpen = !scope.isOpen;
        };
    }
}
