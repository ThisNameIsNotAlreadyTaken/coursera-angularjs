(function () {
    'use strict';

    angular.module('MenuApp').controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$rootScope', 'data'];
    function ItemsController($rootScope, data) {
        var self = this;
        var cancellers = [];
        self.category = data.category || { short_name: 'All Categories' };
        self.items = data.menu_items;

        self.$onInit = function () {
            var categoryChangeBroadCast = function () {
                $rootScope.$broadcast('category:change', { category: self.category });
            };

            categoryChangeBroadCast();

            var cancel = $rootScope.$on('$stateChangeSuccess',
                function (event, toState) {
                    if (toState.name !== 'categories.items') {
                        self.category = {};
                    }
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('category:init', function () {
                categoryChangeBroadCast();
            });
            cancellers.push(cancel);
        }

        self.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };
    }
})();