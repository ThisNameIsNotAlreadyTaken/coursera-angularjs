(function () {

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserInfoService'];
    function MyInfoController(UserInfoService) {
        var self = this;
        self.info = UserInfoService.getInfo();
    }
})();