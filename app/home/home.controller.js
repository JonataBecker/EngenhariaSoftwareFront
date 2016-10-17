angular.module('app').controller('HomeController', function ($scope, Projeto, Conhecimento) {

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
});