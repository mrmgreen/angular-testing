
app.factory('TvListingSvc', ['$http', function ($http) {
    function getNames() {
        var names = [];
        $http.get('data.json').then(function(response) {
            response.data.forEach(function(element, index) {
                names.push(element.name);
            });
            return names;
        }, function(err) {
            console.log('error err', err);
        });
        return names;
    }
    return {
        getNames: getNames
    };

}]);