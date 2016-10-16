angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController'
                    })
                    .state('projetoCadastro', {
                        url: '/projeto/cadastro',
                        templateUrl: 'app/projeto/projetoCadastro.html',
                        controller: 'ProjetoCadastroController'
                    })
                    .state('classificacaoProjeto', {
                        url: '/classificacao',
                        templateUrl: 'app/classificacaoProjeto/classificacaoProjeto.html',
                        controller: 'ClassificacaoProjetoController'
                    });

        });

