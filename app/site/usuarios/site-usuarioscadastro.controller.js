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
		$scope.academicInstituteList = [{idinstitutoacademico: 1, descricao:'ICET'}, {idinstitutoacademico: 2, descricao:'ICA'}];
	}

	$scope.salvar = function (model) {
		var fn = Usuario.gravar;
		if (Usuario.isLogged()) {
			fn = Usuario.regravar;
		}
		fn(model).then(function () {
			if (!Usuario.isLogged()) {
				Usuario.login(model.email, model.senha).then(function () {
					$state.go('site.usuarioslogin');
				});
			} else {
				$state.go('site.usuarioslogin');
			}
		}).catch(function (err) {
			alert('Ops. Ocorreu um erro ao realizar o cadastro.');
		});
	}
	
});