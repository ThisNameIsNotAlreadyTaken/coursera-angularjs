(function () {
    'use strict';

    angular.module('MenuApp').controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['DataService', 'data'];
    function CategoriesController(DataService, data) {
        var self = this;
        self.categories = data;
    }
})();