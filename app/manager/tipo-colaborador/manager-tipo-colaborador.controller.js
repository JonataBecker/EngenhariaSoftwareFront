angular.module('app').controller('ManagerTipoColaboradorController', function ($scope, $state, TipoColaborador) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		TipoColaborador.getItens().then(function (recursos) {
			$scope.itens = recursos;
		})
	}

	$scope.excluir = function (model) {
		TipoColaborador.excluir(model.idcolaborador).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.tipocolaborador.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.tipocolaborador.form', {idcolaborador:model.idcolaborador});
	};

});