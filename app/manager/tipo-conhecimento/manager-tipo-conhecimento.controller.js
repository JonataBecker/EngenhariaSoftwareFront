angular.module('app').controller('ManagerTipoConhecimentoController', function ($scope, $state, TipoConhecimento) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		TipoConhecimento.getItens().then(function (itens) {
			$scope.itens = itens;
		})
	}

	$scope.excluir = function (model) {
		TipoConhecimento.excluir(model.idconhecimento).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.tipoconhecimento.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.tipoconhecimento.form', {idconhecimento:model.idconhecimento});
	};

});