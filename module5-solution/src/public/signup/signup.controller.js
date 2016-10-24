(function () {

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'menuItems', 'UserInfoService'];
    function SignUpController($scope, menuItems, UserInfoService) {
        var self = this;
        $scope.menuItems = menuItems;

        function setWatchers(propertyArray) {
            propertyArray.forEach(function (propertyName) {
                $scope.$watch(propertyName,
                    function handleUserChange() {
                        self.isSaved = false;
                    }, true
                );
            });
        };

        setWatchers(["signUpCtrl.user.firstName", "signUpCtrl.user.lastName", "signUpCtrl.user.email", "signUpCtrl.user.phone", "signUpCtrl.user.favoriteDishNumber"]);

        self.submit = function () {
            self.user.favoriteItem = $scope.favoriteItem;
            UserInfoService.setInfo(self.user);
            self.isSaved = true;
        };
    }
})();