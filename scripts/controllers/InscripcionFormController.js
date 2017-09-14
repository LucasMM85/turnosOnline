(function () {
    var module = angular.module("turnosOnline");

    var InscripcionFormController = function ($scope, $location, constancia) {
        $scope.sexos = [
            {sexoId: "F", sexoName: "Femenino"},
            {sexoId: "M", sexoName: "Masculino"}
        ];


        var onLocalidades = function (response) {
            $scope.localidades = response;
        };
        var onError = function (reason) {
            console.error = "No se pudieron obtener las localidades";
        };
        constancia.getLocalidades()
                  .then(onLocalidades, onError());


    };

    module.controller("InscripcionFormController", InscripcionFormController);
}());