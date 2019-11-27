var app = angular.module("mainApp", []);

app.controller("svsctrl", function ($scope, servicesdemo) {
    $scope.generateRandom = function () {
        $scope.rnum1 = servicesdemo.generate();
    };

});