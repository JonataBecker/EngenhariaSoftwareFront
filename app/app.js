angular.module('app', ['ui.router', 'ngResource', 'ngCookies'])
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
                                },
                                authenticate: false

                        })
                        .state('site.detalhe', {
                                url: 'projeto/:idprojeto/detalhe',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/projeto/site-detalhe.html',
                                                controller: 'SiteDetalheController'
                                        }
                                },
                                authenticate: false

                        })
                        .state('site.usuarioslogin', {
                                url: '/usuarios/login',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/usuarios/site-usuariosLogin.html',
                                                controller: 'SiteUsuariosController'
                                        }
                                },
                                authenticate: false

                        })
                        .state('site.usuarioscadastro', {
                                url: '/usuarios/cadastro',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/usuarios/site-usuariosCadastro.html',
                                                controller: 'SiteUsuariosController'
                                        }
                                },
                                authenticate: false

                        })
                        .state('projetoCadastro', {
                                url: '/projeto/cadastro',
                                templateUrl: 'app/manager/projeto/projetoCadastro.html',
                                controller: 'ProjetoCadastroController',
                        })
                        .state('manager', {
                                abstract: true,
                                templateUrl: 'app/manager/home/manager-home.html',
                                controller: 'ManagerHomeController',
                                authenticate: true
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
                        .state('manager.recursohumano', {
                                url: '/manager/cadastro/recurso-humano',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/recurso-humano/manager-recurso-humano.html',
                                                controller: 'ManagerRecursoHumanoController'
                                        }
                                }
                        })
                        .state('manager.recursohumano.form', {
                                url: '/form/:idrecursohumano',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/recurso-humano/manager-recurso-humano-form.html',
                                                controller: 'ManagerRecursoHumanoFormController'
                                        }
                                }
                        })
                        .state('manager.tipoconhecimento', {
                                url: '/manager/cadastro/tipo-conhecimento',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/tipo-conhecimento/manager-tipo-conhecimento.html',
                                                controller: 'ManagerTipoConhecimentoController'
                                        }
                                }
                        })
                        .state('manager.tipoconhecimento.form', {
                                url: '/form/:idconhecimento',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/tipo-conhecimento/manager-tipo-conhecimento-form.html',
                                                controller: 'ManagerTipoConhecimentoFormController'
                                        }
                                }
                        })


                ;

        })
        .run(function ($rootScope, $state, Usuario) {
                $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){        
                        if (toState.authenticate && !Usuario.isLogged()){
                                $state.go("site.usuarioslogin");
                                event.preventDefault(); 
                        }
                        
                        if (toState.name == 'site.usuarioslogin' && Usuario.isLogged()) {
                                $state.go('site.busca');
                                event.preventDefault();
                        }
                });
        });

// angular.module("app")