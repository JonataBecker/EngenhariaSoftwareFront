angular.module('app').filter('SiteHomeFilter', function () {
    return function (arr, filtros) {
        var ret = [];
        arr.forEach(function (item) {
            try {
                filtros.forEach(function (filtro) {
                    var valido = false;
                    try {
                        if (!item[filtro.nome]) {
                            throw "Item de Filtro válido"
                        }
                        filtro.valores.forEach(function (valor) {
                            if (item[filtro.nome] === valor) {
                                throw "Item de Filtro válido"
                            }
                        });
                    } catch (err) {
                        valido = true;
                    }
                    if (!valido) {
                        throw "Filtro válido"
                    }
                });
                ret.push(item);
            } catch (err) {
            }
        });
        return ret;
    };
});