angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                        .state('home', {
                                abstract: true,
                                templateUrl: 'app/home/home.html',
                                controller: 'HomeController'
                        })
                        .state('home.busca', {
                                url: '/',
                                views: {
                                        'container': {
                                                templateUrl: 'app/home/homeBusca.html',
                                                controller: 'HomeBuscaController'
                                        }
                                }

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

