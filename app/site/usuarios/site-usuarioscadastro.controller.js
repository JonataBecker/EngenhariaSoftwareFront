angular.module('app').controller('SiteUsuariosCadastroController', function ($scope, $state, Usuario, Colaborador) {
	// console.log($scope);
	$scope.model = {};
	$scope.error = null;
	$scope.isLogged = Usuario.isLogged();
	$scope.linkTypesList = [];
	$scope.academicPurposeList = [];
	
	loadRelationItems();
	
	function loadRelationItems() {
		Colaborador.getItens().then(function (recursos) {
			$scope.linkTypesList = recursos;
		});
		$scope.academicPurposeList = [{idintuito: 1, descricao:'ICET'}, {idintuito: 2, descricao:'ICA'}];
	}

	$scope.salvar = function (model) {
		console.log(model);
	}
	
});