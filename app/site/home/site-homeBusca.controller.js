angular.module('app').controller('SiteHomeBuscaController', function ($scope, Projeto, Conhecimento, $state) {

	$scope.info = {};
	$scope.projeto = true;
	$scope.conhecimento = true;

	loadInfo();

	/**
	 * Carrega informações
	 */
	function loadInfo() {
		$scope.info.arr = []
		Projeto.getProjetos().then(function (projetos) {
			projetos.forEach(function(projeto){
				$scope.info.arr.push({
					idprojeto : projeto.idprojeto,
					tipo : 'projeto',
					titulo : projeto.nome,
					descricao : projeto.descricao
				});	
			});
		});
		Conhecimento.getConhecimentos().then(function (conhecimentos) {
			conhecimentos.forEach(function(conhecimento){
				$scope.info.arr.push({
					tipo : 'conhecimento',
					titulo : conhecimento.nome,
				});	
			});
		});
	}

	$scope.abrirDetalhe = function(projeto){
		//console.log(projeto);
		$state.go('site.detalhe', {idprojeto:projeto.idprojeto});
	};

});