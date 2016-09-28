angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                    .state('app', {
                        url: '/',
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController'
                    });

        });

