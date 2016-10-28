angular.module('app').factory('Classificacao', function ($q) {

	var classificacoes = [{
		idclassificacao: 1,
		descricao: "Classifc"
	}];

	return {
		getClassificacoes: function () {
			var q = $q.defer();
			q.resolve(classificacoes);
			return q.promise;
		},
		getClassificacao: function () {
			var q = $q.defer();
			q.resolve({
				idclassificacao: 1,
				descricao: "Classifc"
			});
			return q.promise;
		},
		gravar: function (classificacao) {
			var q = $q.defer();
			classificacoes.push(classificacao);
			q.resolve();
			return q.promise;
		},
		regravar: function (classificacao) {
			var q = $q.defer();
			q.resolve();
			return q.promise;
		},
		excluir: function (classificacao) {
			var q = $q.defer();
			q.resolve();
			return q.promise;
		}
	};

});