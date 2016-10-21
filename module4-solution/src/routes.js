(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: 'src/menuapp/templates/welcome.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/categories.template.html',
                controller: 'CategoriesController as catCtrl',
                resolve: {
                    data: ['DataService', function (DataService) {
                        return DataService.getAllCategories();
                    }]
                }
            })
            .state('categories.items', {
                url: '/categories/{itemName}',
                templateUrl: 'src/menuapp/templates/items.template.html',
                controller: "ItemsController as itemsCtrl",
                resolve: {
                    data: ['$stateParams', 'DataService',
                        function ($stateParams, DataService) {
                            return DataService.getItemsForCategory($stateParams.itemName);
                        }]
                }
            });
    }
})();
