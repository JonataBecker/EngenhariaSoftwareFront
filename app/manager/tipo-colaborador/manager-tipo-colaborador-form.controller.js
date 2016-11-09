angular.module('app').controller('ManagerTipoColaboradorFormController', function ($scope, $state, $stateParams, TipoColaborador) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idcolaborador) {
			TipoColaborador.getItem($stateParams.idcolaborador).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.tipocolaborador');
		});
	}

	$scope.salvar = function (model) {
		var fn = TipoColaborador.gravar;
		if ($stateParams.idrecursohumano) {
			fn = TipoColaborador.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});