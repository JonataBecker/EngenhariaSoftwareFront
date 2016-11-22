angular.module('app').controller('ManagerRecursoHumanoFormController', function ($scope, $state, $stateParams, RecursoHumano) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idrecursohumano) {
			RecursoHumano.getItem($stateParams.idrecursohumano).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.recursohumano');
		});
	}

	$scope.salvar = function (model) {
		var fn = RecursoHumano.gravar;
		if ($stateParams.idrecursohumano) {
			fn = RecursoHumano.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});