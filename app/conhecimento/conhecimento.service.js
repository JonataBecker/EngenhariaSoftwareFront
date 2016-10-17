angular.module('app').factory('Conhecimento', function ($q) {

	return {
		getConhecimentos: function () {
			var q = $q.defer();
			q.resolve([
				{
					nome: "Conhecimento 1",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					nome: "Conhecimento 2",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					nome: "Conhecimento 3",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					nome: "Conhecimento 4",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				},
				{
					nome: "Conhecimento 5",
					descricao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris cond",
				}
			]);
			return q.promise;
		}
	}

});