angular.module('app').factory('Usuario', function ($resource, $cookies) {

	var usuarios = [{
		id: 1,
		email: "teste@teste.com.br",
		usuario: "admin",
		senha: "teste"
	}];

	return {
		isLogged: function () {
			return $cookies.get('logged-id') ? true : false;
		},
		login: function (usuario_param, senha_param) {
			var usuario = usuarios.filter( function(usuario){
				return (usuario.usuario == usuario_param || usuario.email == usuario_param) && usuario.senha == senha_param;
			});
			if (usuario.length == 1) {
				$cookies.put('logged-id', usuario[0].id);
				return true;
			}
			return false;
		},
		logout: function () {
			$cookies.remove('logged-id');
		}
		
	};

});