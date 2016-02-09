
app.controller('TvListingsCtrl', ['$scope', 'TvListingSvc', function ($scope, TvListingSvc) {
    //Demonstrates that controller is working, code below needs to be removed
    $scope.controllerWorking = "Hello";
    $scope.names = TvListingSvc.getNames();

}]);