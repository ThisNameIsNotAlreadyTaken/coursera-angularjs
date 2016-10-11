(function () {
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', ['$scope', LunchCheckController]);
     
    function LunchCheckController($scope){
        $scope.menuItems = "";
        $scope.message = "";

        $scope.greenStyle = false;
        $scope.redStyle = false;

        $scope.setMessage = function() {
            if (!$scope.menuItems) { 
                $scope.message = "Please enter data first";
                $scope.greenStyle = false;
                $scope.redStyle = true;
            } else {
                var itemsCount = $scope.menuItems.split(',').filter(function(v){ return v.trim(); }).length;
                $scope.message = itemsCount > 3 ? "Too much!" : "Enjoy!";
                $scope.greenStyle = true;
                $scope.redStyle = false;
            }
        };
    }
})();