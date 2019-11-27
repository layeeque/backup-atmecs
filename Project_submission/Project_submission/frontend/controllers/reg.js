angular.module('myExame')
    .controller('regController', ['$scope', '$location', '$http', 'loginInfo', function ($scope, $location, $http, loginInfo) {
        $scope.reg = function () {
            var datam = {

                "username": "faizUrRehman",
                "Address": "0xfffc47fbd7add3dda4f540d7a97c4cee5dba21ae"

            }

            $http.post('http://localhost:3000/reg', datam).then(function (data1) {
                console.log("received in reg " + data1.data)
                // $scope.questions = mm;

            })
        }



    }])