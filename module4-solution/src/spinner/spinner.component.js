(function () {
    'use strict';

    angular.module('Spinner')
        .component('spinner', {
            templateUrl: 'templates/spinner.template.html',
            controller: SpinnerController
        });

    SpinnerController.$inject = ['$rootScope']
    function SpinnerController($rootScope) {
        var self = this;
        var cancellers = [];

        self.$onInit = function () {
            var cancel = $rootScope.$on('$stateChangeStart',
                function () {
                    self.isLoading = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function () {
                    self.isLoading = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    self.isLoading = false;
                    console.throw(error)
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
