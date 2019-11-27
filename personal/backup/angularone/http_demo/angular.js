var app = angular.module("mainApp", []);

app.controller('people', function ($scope, $http) {
    console.log('InPeople')
    $http.get(' http://localhost:3000/records')
        .success(function (response) {
            $scope.persons=response;
            console.log($scope.persons);
        });
});