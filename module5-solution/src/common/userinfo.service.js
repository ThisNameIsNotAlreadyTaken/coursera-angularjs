(function () {
    "use strict";

    angular.module('common').service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var self = this;

        var userInfo;

        self.getInfo = function () {
            return userInfo;
        };

        self.setInfo = function (info) {
            userInfo = info;
        };
    }
})();