var app = angular.module('skyGoDevPairingTest', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/javascripts/partials/index.html',
        controller: 'TvListingsCtrl'
    }).otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);