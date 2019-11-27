angular.module('myExame').controller('updtsController', ['$scope', 'loginInfo', '$log', '$http', '$location', 'getapply', function ($scope, loginInfo, $log, $http, $location, getapply) {

    console.log("update controller reloaded")
    $scope.check = () => {
        console.log("in check function**")
        datam = {
            "ID": $scope.acc
        }
        $http.post('http://localhost:3000/getTaskStatus', datam).then(function (data1) {
            console.log("status received is " + data1.data)
            if(data1.data=="")
            {
                $scope.msg="Task is not assigned in Blockchain. Please add it to see its Status"
            }
            else{

            var hex = data1.data
            hex = hex.toString();
            var str = '';
            for (var i = 0; i < hex.length; i += 2)
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            $scope.result = str.replace(/\0/g, '');

            var getapp = getapply.getdata()
            console.log("value from getdata is length is &&&" + getapp.length)
            for (var i = 0; i < getapp.length; i++) {
                if (getapp[i].Address == $scope.acc) {
                    $scope.taskid = getapp[i].Taskid;
                }
            }
        }

        })
    }

    $scope.update = function () {
        datam = {
            "acc": $scope.acc,
            "id": $scope.taskid,
            "status": $scope.newStatus
        }
        $http.post('http://localhost:3000/updateStatus', datam).then(function (data1) {
            console.log("recececec" + data1.data)
            $scope.txhash = data1.data;
        })

    }
}])