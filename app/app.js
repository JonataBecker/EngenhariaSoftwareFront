angular.module('app', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                        .state('site', {
                                abstract: true,
                                templateUrl: 'app/site/home/site-home.html',
                                controller: 'SiteHomeController'
                        })
                        .state('site.busca', {
                                url: '/',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/home/site-homeBusca.html',
                                                controller: 'SiteHomeBuscaController'
                                        }
                                }

                        })
                        .state('site.detalhe', {
                                url: '/detalhe',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/projeto/site-detalhe.html',
                                                controller: 'SiteDetalheController'
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
                        })
                        .state('manager', {
                                abstract: true,
                                templateUrl: 'app/manager/home/manager-home.html',
                                controller: 'ManagerHomeController'
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


                ;

        });

