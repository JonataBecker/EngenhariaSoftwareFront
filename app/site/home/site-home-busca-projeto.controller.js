angular.module('app').controller('SiteHomeBuscaProjetoController', function ($scope, Projeto, $stateParams) {

	$scope.obj = {};
	
	Projeto.getItem($stateParams.idprojeto).then(function(obj){
		$scope.obj = obj;
	});

});