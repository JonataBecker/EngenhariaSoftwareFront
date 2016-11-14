angular.module('app').factory('Usuario', function ($resource, WebService, $cookies) {

	var usuarios = [{
		id: 1,
		email: "teste@teste.com.br",
		usuario: "admin",
		senha: "teste"
	}];

	var url = "usuario";

	return {
		gravar: function (obj) {
			var q = $q.defer();
			WebService.post(url + '/novo', obj).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		regravar: function (obj) {
			var q = $q.defer();
			WebService.post(url + '/atualiza', obj).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
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
		},
		sendPassword: function (usuario_param) {
			var usuario = usuarios.filter( function(usuario){
				return usuario.usuario == usuario_param || usuario.email == usuario_param;
			});
			if (usuario.length == 1) {
				return true;
			}
			return false;
		}
	};

});