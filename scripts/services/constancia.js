(function () {
    var constancia = function ($http) {

        var getConstancia = function (sexo, documento) {

            datos = {'sexo' : sexo,
                     'documento' : documento};
            var url = "php/obtenerInscripcion.php";

            return $http.post(url, datos)
                        .then(function (response) {
                            return response.data;
                        });
        };

        var getLocalidades = function () {
            var url = "php/db/localidades.php";

            return $http.get(url)
                        .then(function (response) {
                            return response.data;
                        });
        };

        var nuevaInscripcion = function () {

        };

        return {
            getConstancia: getConstancia,
            getLocalidades: getLocalidades,
            nuevaInscripcion: nuevaInscripcion
        };
    };

    var module = angular.module("turnosOnline");

    module.factory("constancia", constancia);
}());