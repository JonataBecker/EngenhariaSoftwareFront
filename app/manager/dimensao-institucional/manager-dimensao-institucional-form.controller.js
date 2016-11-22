angular.module('app').controller('ManagerDimensaoInstitucionalFormController', function ($scope, $state, $stateParams, DimensaoInstitucional) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.iddimensaoinstitucional) {
			DimensaoInstitucional.get($stateParams.iddimensaoinstitucional).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.dimensao-institucional');
		});
	}

	$scope.salvar = function (model) {
		var fn = DimensaoInstitucional.gravar;
		if ($stateParams.idclassificacaoprojeto) {
			fn = DimensaoInstitucional.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});