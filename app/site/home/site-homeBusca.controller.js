angular.module('app').controller('SiteHomeBuscaController', function ($scope, Projeto, Colaborador, $state, $q) {

	$scope.info = {};

	loadInfo();

	$scope.abrirDetalhe = function(item) {
		if (item.origem === 'projeto') {
			$state.go('site.projeto', {idprojeto: item.id});
		} else {
			$state.go('site.colaborador', {idcolaborador: item.id});
		}
	}

	/**
	 * Carrega informações
	 */
	function loadInfo() {
		$scope.info.arr = [];
		var promises = [];
		promises.push(Projeto.getItens().then(function (projetos) {
			projetos.forEach(function (projeto) {
				$scope.info.arr.push({
					id: projeto.idprojeto,
					origem: 'projeto',
					titulo: projeto.nome,
					ano: projeto.idprojeto % 2 === 0 ? '2016' : '2015',
					descricao: projeto.descricao
				});
			});
		}));
		promises.push(Colaborador.getItens().then(function (colaboradores) {
			colaboradores.forEach(function (colaborador) {
				$scope.info.arr.push({
					id: colaborador.idcolaborador,
					origem: 'colaborador',
					titulo: colaborador.nome,
					descricao: colaborador.descricao
				});
			})
		}));
		$q.all(promises).then(function () {
			loadFiltro();
		})
	}
	
	/**
	 * Carrega filtros 
	 */
	function loadFiltro() {
		$scope.info.filtros = {};
		var promises = [];
		promises.push(loadFiltroOrigem());
		promises.push(loadFiltroAno());

		$q.all(promises).then(function () {
			setTimeout(function () {
				$('select').selectpicker('refresh');
			}, 200);
		})
	}

	/**
	 * Carrega itens
	 */
	function loadItens(filtro) {
		$scope.info.filtros[filtro] = {};
		$scope.info.filtros[filtro].opcoes = {};
		$scope.info.filtros[filtro].itens = [];
		$scope.info.arr.forEach(function (item) {
			if (item[filtro]) {
				if (!$scope.info.filtros[filtro].opcoes[item[filtro]]) {
					$scope.info.filtros[filtro].opcoes[item[filtro]] = {};
					$scope.info.filtros[filtro].opcoes[item[filtro]].quantidade = 1;
					$scope.info.filtros[filtro].opcoes[item[filtro]].legenda = item[filtro];
					$scope.info.filtros[filtro].itens.push(item[filtro]);
				} else {
					$scope.info.filtros[filtro].opcoes[item[filtro]].quantidade++;
				}
			}
		});
		$scope[filtro] = $scope.info.filtros[filtro].itens;
	}
	
	/**
	 * Carrega filtro de origem 
	 */
	function loadFiltroOrigem() {
		var q = $q.defer();
		loadItens('origem');
		$scope.info.filtros.origem.itens.forEach(function (item) {
			if (item === 'projeto') {
				$scope.info.filtros.origem.opcoes[item].legenda = "Projeto";
			}
			if (item === 'colaborador') {
				$scope.info.filtros.origem.opcoes[item].legenda = "Colaborador";
			}
		});
		q.resolve();
		return q.promise;
	}

	/**
	 * Carrega filtro de ano 
	 */
	function loadFiltroAno() {
		var q = $q.defer();
		loadItens('ano');
		q.resolve();
		return q.promise;
	}


});