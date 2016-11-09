angular.module('app').controller('ManagerRecursoHumanoController', function ($scope, $state, RecursoHumano) {

	$scope.itens = [];

	$scope.$on('$viewContentLoaded', function(event){	
		loadItens();
	});

	function loadItens() {
		RecursoHumano.getItens().then(function (recursos) {
			$scope.itens = recursos;
		})
	}

	$scope.excluir = function (model) {
		RecursoHumano.excluir(model.idrecursohumano).then(function () {
			loadItens();
		}).catch(function (err) {
			alert(err);
		});
	};

	$scope.incluir = function () {
		$state.go('manager.recursohumano.form');
	};

	$scope.alterar = function (model) {
		$state.go('manager.recursohumano.form', {idrecursohumano:model.idrecursohumano});
	};

});