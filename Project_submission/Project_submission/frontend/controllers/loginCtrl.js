angular.module('myExame').controller('loginController', ['$scope', 'loginInfo', '$log', '$http', '$location', function($scope, loginInfo, $log, $http, $location) {

 
    $scope.signIn = () => {

        console.log("entry one is "+ $scope.ID)

        datam = {
            "ID": $scope.ID,
            "Password": $scope.Password
        }
        $http.post('http://localhost:3000/login', datam).then(function(data1) {
            console.log("received data is ZZZZ" + data1.data[0].ID)
            
            if (data1.data != false) {
                loginInfo.setData(data1.data[0].ID, data1.data[0].Account)
                if(data1.data[0].ID == "Admin")
                {
                    $location.path('/admin')   
                }
                else{
                    $location.path('/home')
                }
             
            } else {
                
                $location.path('/login')
            }
        })



    }
}])