angular.module('app').filter('homeFilter', function () {
    return function (arr, projeto, conhecimento) {
        var ret = [];
        if (projeto) {
            arr.filter(function (obj) {
                return obj.tipo === 'projeto';
            }).forEach(function (item) {
                ret.push(item);
            });
        }
        if (conhecimento) {
            arr.filter(function (obj) {
                return obj.tipo === 'conhecimento';
            }).forEach(function (item) {
                ret.push(item);
            });
        }
        return ret;
    };
});