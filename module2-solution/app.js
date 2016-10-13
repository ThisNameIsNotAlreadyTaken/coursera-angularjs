(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);;

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var self = this;

        self.items = ShoppingListCheckOffService.getToBuyItems();

        self.moveToBought = function (index) {
            ShoppingListCheckOffService.moveToBought(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var self = this;

        self.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var self = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "bottles of water", quantity: 20 },
            { name: "pies", quantity: 30 },
            { name: "tomatoes", quantity: 40 },
            { name: "chocolates", quantity: 50 },
            { name: "marmelade", quantity: 60 }];

        var boughtItems = [];

        self.moveToBought = function (index) {
            boughtItems.push(toBuyItems.splice(index, 1)[0]);
        };

        self.getToBuyItems = function () {
            return toBuyItems;
        };

        self.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();