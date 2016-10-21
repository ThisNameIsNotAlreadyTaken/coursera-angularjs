(function () {
    'use strict';

    angular.module('Data')
        .service('DataService', DataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");;

    DataService.$inject = ['$http', 'ApiBasePath']
    function DataService($http, ApiBasePath) {
        var self = this;

        self.getAllCategories = function () {
            return $http({
                method: 'GET',
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                return result.data;
            });
        };

        self.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (result) {
                return result.data;
            });
        };
    }
})();
