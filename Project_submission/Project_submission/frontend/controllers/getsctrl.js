angular.module('myExame').controller('getsController', ['$scope', 'loginInfo', '$log', '$http', '$location', function ($scope, loginInfo, $log, $http, $location) {


    $scope.check = () => {
        datam = {
            "ID": $scope.acc,
        }
        $http.post('http://localhost:3000/getTaskStatus', datam).then(function (data1) {
            console.log("status received is " + data1.data)

            if(data1.data=="")
            {
                $scope.msg="Task is not assigned in Blockchain. Please add it to see its Status"
            }

            var hex = data1.data


            hex = hex.toString();
            var str = '';
            for (var i = 0; i < hex.length; i += 2)
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            $scope.result = str.replace(/\0/g, '');


        })



    }
}])