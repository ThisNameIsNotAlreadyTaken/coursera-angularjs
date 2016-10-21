(function () {
    'use strict';

    angular.module('NavBar')
        .component('navBar', {
            templateUrl: 'src/navbar/templates/navbar.template.html',
            controller: NavBarController
        });

    NavBarController.$inject = ['$rootScope']
    function NavBarController($rootScope) {
        var self = this;
        var cancellers = [];

        self.isHomeScreen = true;

        self.$onInit = function () {
            var cancel  = $rootScope.$on('$stateChangeSuccess',
                function (event, toState) {
                    self.isHomeScreen = toState.name === 'welcome';
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    console.throw(error);
                });
            cancellers.push(cancel);
        };

        self.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };
    };
})();
