angular.module('app').controller('SiteUsuariosLoginController', function ($scope, $state, Usuario) {
	// console.log($scope);
	$scope.model = {};
	$scope.error = null;
	$scope.isLogged = Usuario.isLogged();
	$scope.user = null;
	if ($scope.isLogged) {
		Usuario.getLoggedUser().then(function(user) {
			$scope.user = user;
		});
	}
	// $scope.linkTypesList = ;
	
	$scope.login = function () {
		$scope.error = null;
		$scope.success = null;
		Usuario.login($scope.model.usuario, $scope.model.senha).then(function (a) {
			console.log(a);
			if (a) {
				$scope.error = null;
				$state.go('manager.home');
			} else {
				$scope.error = 'Erro ao realizar login. Verifique os dados informados.';
			}
		});
	}
	
	$scope.logout = function () {
		alert('logout');
		$scope.error = null;
		$scope.success = null;
		Usuario.logout();
		$scope.isLogged = Usuario.isLogged();
		$state.go('site.usuarioslogin');
	}

	$scope.passwordRecover = function () {
		$scope.error = null;
		$scope.success = null;
		Usuario.sendPassword($scope.model.usuario).then(function (sended) {
			if (sended) {
				$scope.success = 'Verifique seu E-mail. Enviamos as instruções para a recuperação da senha.';
			} else {
				$scope.error = 'Usuário não encontrado.';
			}
		});
	}
	
});