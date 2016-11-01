angular.module('app').controller('ManagerClassificacaoFormController', function ($scope, $state, $stateParams, Classificacao) {

	$scope.model = {};
	var modal = angular.element('#modal');
	
	init();

	function init() {
		if ($stateParams.idclassificacao) {
			Classificacao.getClassificacao($stateParams.idclassificacao).then(function (obj) {
				$scope.model = obj;
			}).catch(function (err) {
				alert(err);
			})
		}
		modal.modal('show');
		modal.on('hidden.bs.modal', function (e) {
			$state.go('manager.classificacao');
		});
	}

	$scope.salvar = function (model) {
		var fn = Classificacao.gravar;
		if ($stateParams.idclassificacao) {
			fn = Classificacao.regravar;
		}
		fn(model).then(function () {
			modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	};

});