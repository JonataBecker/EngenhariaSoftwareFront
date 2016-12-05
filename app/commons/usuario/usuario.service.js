angular.module('app').factory('Usuario', function ($q, $resource, WebService, $cookies) {

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
			var logged = this.getLoggedUser();
			obj.idusuario = logged.idusuario;
			WebService.post(url + '/atualiza', obj).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		isLogged: function () {
			return $cookies.get('logged-user') ? true : false;
		},
		login: function (usuario_param, senha_param) {
			var q = $q.defer();
			var obj = {usuario:usuario_param, senha: senha_param};
			WebService.post(url + '/login', obj).then(function(data) {
				if (data.nome) {
					$cookies.put('logged-user', JSON.stringify(data));
					q.resolve(data);
				} else {
					q.resolve(false);
				}
			}).catch(function(err){
				q.reject(err);
			});
			
			return q.promise;
		},
		logout: function () {
			$cookies.remove('logged-user');
		},
		sendPassword: function (usuario_param) {
			var q = $q.defer();
			var obj = {usuario: usuario_param};
			WebService.post(url + '/recuperar', obj).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		getLoggedUser: function () {
			return JSON.parse($cookies.get('logged-user'));
		}
	};

});