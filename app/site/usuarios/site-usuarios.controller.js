angular.module('app').controller('SiteUsuariosController', function ($scope, $state, Usuario) {
	// console.log($scope);
	$scope.model = {};
	$scope.error = null;
	$scope.isLogged = Usuario.isLogged();
	
	$scope.login = function () {
		if (($scope.isLogged = Usuario.login($scope.model.usuario, $scope.model.senha))) {
			$scope.error = null;
			$state.go('site.busca');
		} else {
			$scope.error = 'Erro ao realizar login. Verifique os dados informados.';
		}
	}
	$scope.logout = function () {
		Usuario.logout();
		$scope.isLogged = Usuario.isLogged();
		$state.go('site.usuarioslogin');
	}
	
});