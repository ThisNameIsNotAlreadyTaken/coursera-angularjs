(function () {
    'use strict';

    angular.module('myFirstApp', []).controller("MyFirstController", function ($scope) {
        $scope.name = "Vasya";
        $scope.sayHello = function() { return "Hello!"; }
    });
})();