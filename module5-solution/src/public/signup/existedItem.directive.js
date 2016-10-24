(function () {
    angular.module('public').directive('existedItem', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: ExistedItemDirectiveLink
        };
    });

    function ExistedItemDirectiveLink(scope, element, attributes, controller) {
        controller.$validators.existedItem = function (modelValue) {
            var item = modelValue ? scope.menuItems.menu_items.find(function (item) { return item.short_name.toLowerCase() === modelValue.toLowerCase(); }) : null;
            scope.favoriteItem = item;
            return !!item;
        };
    }
})();