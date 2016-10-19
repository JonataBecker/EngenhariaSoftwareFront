angular.module('app').controller('ClassificacaoProjetoController', function ($scope) {

	$scope.classificacoes = [];
	$scope.classificacao = getNullObject();

	$scope.salvarClassificacao = function(classificacao){

		var idInput = classificacao.id;
		var descricaoInput = classificacao.descricao;
		var newClassificacao = {
			id        : idInput,
			descricao : descricaoInput
		};
		
		if(idInput == null){
			newClassificacao.id = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
			$scope.classificacoes.push(newClassificacao);
		}else{
			$scope.classificacoes.forEach(function (element, index, array){
				if(element.id == newClassificacao.id) element = newClassificacao;
			});
		}

		$scope.classificacao = getNullObject();
	};

	$scope.excluirClassificacao = function(id){
		$scope.classificacoes.splice($scope.classificacoes.findIndex(
			function(element, index, array) {
				return element.id == id;
		}), 1);
	};

	$scope.editarClassificacao = function(id){
		$scope.classificacao = $scope.classificacoes.find(function (element, index, array) {
			return element.id == id;
		});
	};

	function getNullObject(){
		return {
			id:null,
			descricao:null
		};
	}

});