angular.module('myExame')
    .controller('myTaskController', ['$scope', '$location', '$http', 'loginInfo', function ($scope, $location, $http, loginInfo) {
        startTest = () => {
            console.log(" I aM IN myTaskController CTRL")
            $scope.name = loginInfo.getData().ID;
            $scope.id = loginInfo.getData().Account;
            console.log("AAAcount " + $scope.id)
            var datam = {
                "participant": $scope.id
            }

            $http.post('http://localhost:3000/myTask', datam).then(function (data1) {
                console.log("received in MyTask " + data1.data)
                // $scope.questions = mm;

                $scope.msg = data1.data;
                $scope.Taskid= data1.data.Taskid
                $scope.status = data1.data.status
                var dataId = {
                    "Taskid": data1.data.Taskid
                }
                $http.post('http://localhost:3000/getTask', dataId).then(function (data11) {
                    console.log("received in MyTask 2 " + data11.data)
                    // $scope.questions = mm;
    
                    $scope.task = data11.data;
                   
                })
            })
        }
        startTest();



    }])