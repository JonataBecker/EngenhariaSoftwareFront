angular.module('app').controller('ManagerProducaoAcademicaFormController', function ($scope, $state, $stateParams, ProducaoAcademica) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idproducaoacademica) {
			ProducaoAcademica.getItem($stateParams.idproducaoacademica).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.producaoacademica');
		});
	}

	$scope.salvar = function (model) {
		var fn = ProducaoAcademica.gravar;
		if ($stateParams.idproducaoacademica) {
			fn = ProducaoAcademica.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});