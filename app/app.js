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
                        .state('site.projeto', {
                                url: '/projeto/:idprojeto',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/home/site-home-busca-projeto.html',
                                                controller: 'SiteHomeBuscaProjetoController'
                                        }
                                },
                                authenticate: false
                        })                        
                        .state('site.colaborador', {
                                url: '/colaborador/:idcolaborador',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/home/site-home-busca-colaborador.html',
                                                controller: 'SiteHomeBuscaColaboradorController'
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
                                                templateUrl: 'app/site/usuarios/login.html',
                                                controller: 'SiteUsuariosLoginController'
                                        }
                                },
                                authenticate: false

                        })
                        .state('site.usuarioscadastro', {
                                abstract: true,
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/usuarios/cadastro.html',
                                                controller: 'SiteUsuariosCadastroController'
                                        }
                                }
                        })
                        .state('site.usuarioscadastro.basico', {
                                url: '/usuarios/cadastro',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/usuarios/basico.html',
                                                controller: 'SiteUsuariosCadastroController'
                                        }
                                },
                                authenticate: false

                        })
                        .state('site.usuarioscadastro.competencias', {
                                url: '/usuarios/cadastro/competencias',
                                views: {
                                        'container': {
                                                templateUrl: 'app/site/usuarios/competencias.html',
                                                controller: 'SiteUsuariosCadastroController'
                                        }
                                },
                                authenticate: true
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
                        .state('manager.dimensao-institucional', {
                                url: '/manager/cadastro/dimensao-institucional',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/dimensao-institucional/manager-dimensao-institucional.html',
                                                controller: 'ManagerDimensaoInstitucionalController'
                                        }
                                }
                        })
                        .state('manager.dimensao-institucional.form', {
                                url: '/form/:iddimensaoinstitucional',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/dimensao-institucional/manager-dimensao-institucional-form.html',
                                                controller: 'ManagerDimensaoInstitucionalFormController'
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
                        .state('manager.colaborador', {
                                url: '/manager/cadastro/colaborador',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/colaborador/manager-colaborador.html',
                                                controller: 'ManagerColaboradorController'
                                        }
                                }
                        })
                        .state('manager.colaborador.form', {
                                url: '/form/:idcolaborador',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/colaborador/manager-colaborador-form.html',
                                                controller: 'ManagerColaboradorFormController'
                                        }
                                }
                        })
                        .state('manager.publico', {
                                url: '/manager/cadastro/publico',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/publico/manager-publico.html',
                                                controller: 'ManagerPublicoController'
                                        }
                                }
                        })
                        .state('manager.publico.form', {
                                url: '/form/:idpublico',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/publico/manager-publico-form.html',
                                                controller: 'ManagerPublicoFormController'
                                        }
                                }
                        })
                        .state('manager.producaoacademica', {
                                url: '/manager/cadastro/producao-academica',
                                views: {
                                        'container': {
                                                templateUrl: 'app/manager/producao-academica/manager-producao-academica.html',
                                                controller: 'ManagerProducaoAcademicaController'
                                        }
                                }
                        })
                        .state('manager.producaoacademica.form', {
                                url: '/form/:idproducaoacademica',
                                views: {
                                        'form': {
                                                templateUrl: 'app/manager/producao-academica/manager-producao-academica-form.html',
                                                controller: 'ManagerProducaoAcademicaFormController'
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