angular.module('app').controller('SiteHomeBuscaColaboradorController', function ($scope, Colaborador, $stateParams) {

	$scope.obj = {};
	
	Colaborador.getItem($stateParams.idcolaborador).then(function(obj){
		$scope.obj = obj;
	});

});