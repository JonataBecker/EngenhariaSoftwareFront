angular.module('app').controller('ManagerProjetoFormController', function ($scope, $state, $stateParams, Projeto) {

	$scope.model = {};
	var modal = angular.element('#modal');

	init();
	
	function init() {
		if ($stateParams.idprojeto) {
			Projeto.getProjeto($stateParams.idprojeto).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.projeto');
		});
	}

	$scope.salvar = function (model) {
		var fn = Projeto.gravar;
		if ($stateParams.idclassificacao) {
			fn = Projeto.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});