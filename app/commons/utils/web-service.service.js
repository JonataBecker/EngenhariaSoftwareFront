angular.module('app').factory('WebService', function ($q, $http) {

	var url = 'https://engenharia-softwareii.herokuapp.com/';

	return {
		get: function (pagina) {
			var q = $q.defer();
			$http.get(url + pagina).then(function(data){
				q.resolve(data.data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		},
		post: function(pagina, dado) {
			var q = $q.defer();
			$http.post(url + pagina, dado).then(function(data){
				q.resolve(data.data);
			}).catch(function(err){
				q.reject(err);
			});
			return q.promise;
		}
	}

});