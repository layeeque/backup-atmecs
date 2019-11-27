angular.module("todoApp",[])

.controller("TodoCtrl",function($scope){
    $scope.editflag=true;
    $scope.todos=[
        "learn angular 1",
        "try your exercises",
        "visit java brains site"
    ];

    $scope.addNewTodo=function(){
        $scope.todos.push($scope.newtodo);
        $scope.newtodo="";
    }

    $scope.triggereditmode=function(){
        $scope.editflag=!$scope.editflag;

    }

    $scope.deletetodo=function(index){
        $scope.todos.splice(index,1)

    }

});
