angular.module('app').factory('DimensaoInstitucional', function ($q, WebService) {

	return {
		getAll: function () {
			var q = $q.defer();
			WebService.get('dimensao-institucional').then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		get: function (model) {
			var q = $q.defer();
			WebService.get('dimensao-institucional/' + model).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		gravar: function (model) {
			var q = $q.defer();
			WebService.post('dimensao-institucional/novo', model).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		regravar: function (model) {
			var q = $q.defer();
			WebService.post('dimensao-institucional/atualiza', model).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		excluir: function (model) {
			var q = $q.defer();
			WebService.get('dimensao-institucional/exclui/' + model.iddimensaoinstitucional, {}).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});			
			return q.promise;
		}
	};

});