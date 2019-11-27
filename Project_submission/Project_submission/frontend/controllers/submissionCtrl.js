angular.module('myExame')
    .controller('submission', ['$scope', '$location','loginInfo','$http','$route','getapply', function($scope, $location,loginInfo,$http,$route,getapply) {
        console.log("admin ctrl reloaded")

        $scope.startTest1 = function(){
            $http.get('http://localhost:3000/getApply').then(function (data1) {
                console.log("received result is " + JSON.stringify(data1.data))
                 $scope.apply = data1.data;
                 getapply.setdata($scope.apply )

              
            })
        }();
        //startTest1();

        $scope.confirm= function(a,s){
            console.log("taskid"+a.Taskid )
            console.log("address"+a.Address)
            console.log("status"+a.status)
            datam={
                "taskid":a.Taskid,
                "address":a.Address,
                "status":a.status,
                "apply":s

            }

            $http.post('http://localhost:3000/changeStatusSubmit',datam).then(function (data1) {
                console.log("received result is " + JSON.stringify(data1.data))
                //var scrollElement = $window.scrollY
                $route.reload();
                // $scope.$apply(function() {
                //     $scope.pixelsScrolled = scrollElement;
                // })
            })
            
        }

        $scope.AddBLC= function(a){
            console.log("taskid"+a.Taskid )
            console.log("address"+a.Address)
            console.log("status"+a.status)
            datam={
                "taskid":a.Taskid,
                "address":a.Address,
                "status":a.status

            }

            $http.post('http://localhost:3000/AddBLC',datam).then(function (data1) {
                console.log("received result is " + JSON.stringify(data1.data))
                //var scrollElement = $window.scrollY
                $route.reload();
                // $scope.$apply(function() {
                //     $scope.pixelsScrolled = scrollElement;
                // })
            })
            
        }
    }])