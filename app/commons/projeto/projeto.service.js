angular.module('app').factory('Projeto', function ($q) {

	return {
		getProjetos: function () {
			var q = $q.defer();
			q.resolve([
				{
					idprojeto: 1,
					nome: "Projeto 1",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					idprojeto: 2,
					nome: "Projeto 2",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					idprojeto: 3,
					nome: "Projeto 3",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					idprojeto: 4,
					nome: "Projeto 4",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					idprojeto: 5,
					nome: "Projeto 5",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				}
			]);
			return q.promise;
		},
		getProjeto: function (idProjeto) {
			var q = $q.defer();
			q.resolve({
				nome: "Projeto 1",
				descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
			});
			return q.promise;
		}
	}

});