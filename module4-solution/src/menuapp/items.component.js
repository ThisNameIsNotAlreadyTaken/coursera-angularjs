(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemList', {
            templateUrl: 'templates/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
})();