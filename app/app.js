angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                        .state('home', {
                                abstract: true,
                                templateUrl: 'app/site/home/home.html',
                                controller: 'HomeController'
                        })
                        .state('home.busca', {
                                url: '/',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/home/homeBusca.html',
                                                controller: 'HomeBuscaController'
                                        }
                                }

                        })
                        .state('projetoCadastro', {
                                url: '/projeto/cadastro',
                                templateUrl: 'app/manager/projeto/projetoCadastro.html',
                                controller: 'ProjetoCadastroController'
                        })
                        .state('classificacaoProjeto', {
                                url: '/classificacao',
                                templateUrl: 'app/manager/classificacaoProjeto/classificacaoProjeto.html',
                                controller: 'ClassificacaoProjetoController'
                        });

        });

