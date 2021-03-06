angular.module('app').factory('RecursoHumano', function ($q, WebService) {

	var url = 'recurso-humano';

	return {
		getItens: function () {
			var q = $q.defer();
			WebService.get(url).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		getItem: function (obj) {
			var q = $q.defer();
			WebService.get(url + '/' + obj).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
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
		excluir: function (obj) {
			var q = $q.defer();
			WebService.get(url + '/exclui/' + obj, {}).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});			
			return q.promise;
		}
	};

});