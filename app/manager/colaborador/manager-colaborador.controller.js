angular.module('app').controller('ManagerColaboradorController', function ($scope, $state, Colaborador) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		Colaborador.getItens().then(function (recursos) {
			$scope.itens = recursos;
		})
	}

	$scope.excluir = function (model) {
		Colaborador.excluir(model.idcolaborador).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.colaborador.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.colaborador.form', {idcolaborador:model.idcolaborador});
	};

});