angular.module('app').controller('ManagerDimensaoInstitucionalController', function ($scope, $state, DimensaoInstitucional) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		DimensaoInstitucional.getAll().then(function (dimensoes) {
			$scope.itens = dimensoes;
		})
	}

	$scope.excluir = function (model) {
		DimensaoInstitucional.excluir(model).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.dimensao-institucional.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.dimensao-institucional.form', {iddimensaoinstitucional:model.iddimensaoinstitucional});
	};

});