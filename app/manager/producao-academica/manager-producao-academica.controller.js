angular.module('app').controller('ManagerProducaoAcademicaController', function ($scope, $state, ProducaoAcademica) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		ProducaoAcademica.getItens().then(function (recursos) {
			$scope.itens = recursos;
		})
	}

	$scope.excluir = function (model) {
		ProducaoAcademica.excluir(model.idproducaoacademica).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.producaoacademica.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.producaoacademica.form', {idproducaoacademica:model.idproducaoacademica});
	};

});