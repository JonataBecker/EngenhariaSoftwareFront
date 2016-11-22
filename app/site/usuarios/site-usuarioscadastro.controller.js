angular.module('app').controller('SiteUsuariosCadastroController', function ($scope, $state, Usuario, Colaborador) {
	// console.log($scope);
	$scope.model = {};
	$scope.error = null;
	$scope.isLogged = Usuario.isLogged();
	$scope.linkTypesList = [];
	$scope.academicInstituteList = [];
	
	loadRelationItems();
	
	function loadRelationItems() {
		Colaborador.getItens().then(function (recursos) {
			$scope.linkTypesList = recursos;
		});
		$scope.academicInstituteList = [{idinstituto: 1, descricao:'ICET'}, {idinstituto: 2, descricao:'ICA'}];
	}

	$scope.salvar = function (model) {
		var fn = Usuario.gravar;
		if (Usuario.isLogged()) {
			fn = Usuario.regravar;
		}
		fn(model).then(function () {
			alert('login');
			// modal.modal('hide');
		}).catch(function (err) {
			alert(err);
		});
	}
	
});