(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
        var self = this;

        self.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                return result.data.menu_items.filter(function (e) { return e.description.toLowerCase().indexOf(searchTerm) !== -1; });
            });
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var self = this;

        self.searchTerm = "";
        self.isLoading = false;

        self.searchItems = function () {
            self.foundItems = [];
            if (!self.searchTerm) {
                self.isNothingFound = true; 
                return;
            } else {
                self.isNothingFound = false;
            }

            self.isLoading = true;

            MenuSearchService.getMatchedMenuItems(self.searchTerm)
            .then(function (foundItems) {
                self.foundItems = foundItems;
                self.isNothingFound = !foundItems.length;
            }).catch(function (error) {
                console.log(error);
            }).finally(function(){
                self.isLoading = false;
            });
        }

        self.removeItem = function (index) {
            self.foundItems.splice(index, 1);
        }
    }
})();