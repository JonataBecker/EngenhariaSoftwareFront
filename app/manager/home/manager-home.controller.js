angular.module('app').controller('ManagerHomeController', function ($scope, $rootScope, $state) {

	chageMenu();
	
	$rootScope.$on('$stateChangeSuccess', function() {
		chageMenu();
	});

	function chageMenu() {
		$scope.menu = $state.current.name.split(".")[1];
	}
});