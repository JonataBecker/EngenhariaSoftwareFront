angular.module('app').controller('ClassificacaoProjetoController', function ($scope) {

	$scope.classificacoes = [];
	$scope.myValue = false;
	$scope.classificacao = getNullObject();
	var modal = angular.element('#modal_classificacao');
	showTable();

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
		}
		//else{
		//	$scope.classificacoes.forEach(function (element, index, array){
		//		if(element.id == newClassificacao.id) element = newClassificacao;
		//	});
		//}

		$scope.classificacao = getNullObject();
		modal.modal('hide');
		showTable();
	};

	$scope.excluirClassificacao = function(id){
		$scope.classificacoes.splice($scope.classificacoes.findIndex(
			function(element, index, array) {
				return element.id == id;
		}), 1);
		showTable();
	};

	$scope.editarClassificacao = function(id){
		$scope.classificacao = $scope.classificacoes.find(function (element, index, array) {
			return element.id == id;
		});
		modal.modal('show');
	};

	function getNullObject(){
		return {
			id:null,
			descricao:null
		};
	}

	function showTable(){
		$scope.myValue = $scope.classificacoes.length > 0;
	}

});