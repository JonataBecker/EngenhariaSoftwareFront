angular.module('app').controller('ManagerPublicoFormController', function ($scope, $state, $stateParams, Publico) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idpublico) {
			Publico.getItem($stateParams.idpublico).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.publico');
		});
	}

	$scope.salvar = function (model) {
		var fn = Publico.gravar;
		if ($stateParams.idpublico) {
			fn = Publico.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});