angular.module('app').factory('Usuario', function ($q, $resource, WebService, $cookies) {

	// var usuarios = [{
	// 	id: 1,
	// 	email: "teste@teste.com.br",
	// 	usuario: "admin",
	// 	senha: "teste",
	// 	nome: "Admin"
	// }];

	var url = "usuario";

	return {
		getUsuarios: function () {
			var q = $q.defer();
			WebService.get(url).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		gravar: function (obj) {
			var q = $q.defer();
			var data = obj;
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
			var q = $q.defer();
			this.getUsuarios().then(function (usuarios) {
				var usuario_logado = usuarios.filter( function(usuario) {
					return (usuario.usuario == usuario_param || usuario.email == usuario_param) && usuario.senha == senha_param;
				});				
				if (usuario_logado.length == 1) {
					$cookies.put('logged-id', usuario_logado[0].id);
					q.resolve(usuario_logado);
				} else {
					q.resolve(false);
				}
			}).catch(function (err) {
				q.reject(err);
			});
			return q.promise;
		},
		logout: function () {
			$cookies.remove('logged-id');
		},
		sendPassword: function (usuario_param) {
			var q = $q.defer();
			this.getUsuarios().then(function (usuarios) {
				var usuario_logado = usuarios.filter( function(usuario) {
					return (usuario.usuario == usuario_param || usuario.email == usuario_param);
				});				
				if (usuario_logado.length == 1) {
					q.resolve(true);
				} else {
					q.resolve(false);
				}
			}).catch(function (err) {
				q.reject(err);
			});
			return q.promise;
		},
		getLoggedUser: function () {
			var q = $q.defer();
			var logged_id = $cookies.get('logged-id');
			this.getUsuarios().then(function (usuarios) {
				if (logged_id) {
					var user = usuarios.filter( function(usuario){
						return (usuario.id == logged_id);
					});
					q.resolve(user[0]);
				} else {
					q.reject(err);
				}
			}).catch(function (err) {
				q.reject(err);
			});
			return q.promise;
		}
	};

});