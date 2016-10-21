(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemList', {
            templateUrl: 'src/menuapp/templates/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
})();