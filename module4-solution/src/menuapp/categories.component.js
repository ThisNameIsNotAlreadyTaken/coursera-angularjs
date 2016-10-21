(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryList', {
            templateUrl: 'templates/categories.component.template.html',
            controller: CategoryListComponentController,
            bindings: {
                items: '<'
            }
        });

    CategoryListComponentController.$inject = ['$rootScope'];
    function CategoryListComponentController($rootScope) {
        var self = this;
        var cancellers = [];

        self.$onInit = function () {
            var cancel = $rootScope.$on('category:change', function (event, data) {
                self.selectedCategoryShortName = data.category.short_name;
            });
            cancellers.push(cancel);

            $rootScope.$broadcast('category:init');
        };

        self.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };
    }
})();