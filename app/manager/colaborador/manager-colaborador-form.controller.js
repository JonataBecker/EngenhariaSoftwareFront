angular.module('app').controller('ManagerColaboradorFormController', function ($scope, $state, $stateParams, Colaborador) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idcolaborador) {
			Colaborador.getItem($stateParams.idcolaborador).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.colaborador');
		});
	}

	$scope.salvar = function (model) {
		var fn = Colaborador.gravar;
		if ($stateParams.idcolaborador) {
			fn = Colaborador.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});