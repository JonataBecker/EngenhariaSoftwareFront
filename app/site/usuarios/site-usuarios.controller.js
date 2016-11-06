angular.module('app').controller('SiteUsuariosController', function ($scope, $state, Usuario) {
	// console.log($scope);
	$scope.model = {};
	$scope.error = null;
	$scope.isLogged = Usuario.isLogged();
	
	$scope.login = function () {
		$scope.error = null;
		$scope.success = null;
		if (($scope.isLogged = Usuario.login($scope.model.usuario, $scope.model.senha))) {
			$scope.error = null;
			$state.go('site.busca');
		} else {
			$scope.error = 'Erro ao realizar login. Verifique os dados informados.';
		}
	}
	$scope.logout = function () {
		$scope.error = null;
		$scope.success = null;
		Usuario.logout();
		$scope.isLogged = Usuario.isLogged();
		$state.go('site.usuarioslogin');
	}
	$scope.passwordRecover = function () {
		$scope.error = null;
		$scope.success = null;
		if (Usuario.sendPassword($scope.model.usuario)) {
			$scope.success = 'Verifique seu E-mail. Enviamos as instruções para a recuperação da senha.';
		} else {
			$scope.error = 'Usuário não encontrado.';
		}
	}
});