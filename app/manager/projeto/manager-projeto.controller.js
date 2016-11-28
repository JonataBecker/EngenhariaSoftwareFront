angular.module('app').controller('ManagerProjetoController', function ($scope, $state, Projeto) {

	$scope.itens = [];
	loadItens();

	function loadItens() {
		Projeto.getItens().then(function (projetos) {
			$scope.itens = projetos;
		})
	}

	$scope.incluir = function () {
		$state.go('manager.projeto.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.projeto.form', {idprojeto:model.idprojeto});
	};

});