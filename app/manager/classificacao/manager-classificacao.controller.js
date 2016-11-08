angular.module('app').controller('ManagerClassificacaoController', function ($scope, $state, Classificacao) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		Classificacao.getClassificacoes().then(function (classificacoes) {
			$scope.itens = classificacoes;
		})
	}

	$scope.excluir = function (model) {
		Classificacao.excluir(model).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.classificacao.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.classificacao.form', {idclassificacaoprojeto:model.idclassificacaoprojeto});
	};

});