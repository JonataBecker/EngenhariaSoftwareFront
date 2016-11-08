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
                                url: 'projeto/:idprojeto/detalhe',
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
                        .state('manager', {
                                abstract: true,
                                templateUrl: 'app/manager/home/manager-home.html',
                                controller: 'ManagerHomeController'
                        })
                        .state('manager.home', {
                                url: '/manager',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/home/manager-home-index.html',
                                                controller: 'ManagerHomeIndexController'
                                        }
                                }
                        })
                        .state('manager.projeto', {
                                url: '/manager/projeto',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/projeto/manager-projeto.html',
                                                controller: 'ManagerProjetoController'
                                        }
                                }
                        })
                        .state('manager.projeto.form', {
                                url: '/form/:idprojeto',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/projeto/manager-projeto-form.html',
                                                controller: 'ManagerProjetoFormController'
                                        }
                                }
                        })
                        .state('manager.classificacao', {
                                url: '/manager/cadastro/classificacao',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/classificacao/manager-classificacao.html',
                                                controller: 'ManagerClassificacaoController'
                                        }
                                }
                        })
                        .state('manager.classificacao.form', {
                                url: '/form/:idclassificacaoprojeto',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/classificacao/manager-classificacao-form.html',
                                                controller: 'ManagerClassificacaoFormController'
                                        }
                                }
                        })


                ;

        });

