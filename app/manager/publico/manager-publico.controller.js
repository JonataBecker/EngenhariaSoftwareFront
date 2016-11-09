angular.module('app').controller('ManagerPublicoController', function ($scope, $state, Publico) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		Publico.getItens().then(function (recursos) {
			$scope.itens = recursos;
		})
	}

	$scope.excluir = function (model) {
		Publico.excluir(model.idpublico).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.publico.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.publico.form', {idpublico:model.idpublico});
	};

});