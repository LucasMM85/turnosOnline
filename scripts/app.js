(function () {

    var app = angular.module("turnosOnline",["ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/inicio", {
                templateUrl: "views/main.html",
                controller: "controllers/MainController.js"
            })
            .when("/buscarConstancia", {
                templateUrl: "views/buscarConstancia.html",
                controller: "controllers/BuscarConstanciaController.js"
            })
            .when("/constancia", {
                templateUrl: "views/constancia.html",
                controller: "controllers/ConstanciaController.js"
            })
            .otherwise({
                redirectTo: "/inicio"
            });
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    });
}());