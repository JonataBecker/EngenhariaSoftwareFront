angular.module('app').factory('Classificacao', function ($q, WebService) {

	return {
		getClassificacoes: function () {
			var q = $q.defer();
			WebService.get('classificacao-projeto').then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		getClassificacao: function (classificacao) {
			var q = $q.defer();
			WebService.get('classificacao-projeto/' + classificacao).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		gravar: function (classificacao) {
			var q = $q.defer();
			WebService.post('classificacao-projeto/novo', classificacao).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		regravar: function (classificacao) {
			var q = $q.defer();
			WebService.post('classificacao-projeto/atualiza', classificacao).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		excluir: function (classificacao) {
			var q = $q.defer();
			WebService.get('classificacao-projeto/exclui/' + classificacao.idclassificacaoprojeto, {}).then(function(data) {
				q.resolve(data);
			}).catch(function(err){
				q.reject(err);
			});			
			return q.promise;
		}
	};

});