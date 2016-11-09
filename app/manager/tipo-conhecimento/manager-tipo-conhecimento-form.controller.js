angular.module('app').controller('ManagerTipoConhecimentoFormController', function ($scope, $state, $stateParams, TipoConhecimento) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idconhecimento) {
			TipoConhecimento.getItem($stateParams.idconhecimento).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.tipoconhecimento');
		});
	}

	$scope.salvar = function (model) {
		var fn = TipoConhecimento.gravar;
		if ($stateParams.idrecursohumano) {
			fn = TipoConhecimento.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});