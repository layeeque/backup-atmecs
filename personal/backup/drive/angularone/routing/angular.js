var app=angular.module('app',['ui.router','ngMaterial']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('firstMessage',{
        url:'/first-msg',
        templateUrl:'msg1.htm',
        controller:'msg1'

    })
    .state('secondMessage',{
        url:'/second-msg',
        templateUrl:'msg2.htm',
        controller:'msg2'

    })
     .state('root',{
        url:'/',
        template:'<p> this is just a message </p>'
       

    });
    // .state('noroute',{
    //     url:'*path',
    //     template:'<p> no route available try clicking somethiong else</p>'
    // })

    $urlRouterProvider.otherwise('/');


}]);

app.controller('msg1',['$scope',function($scope){
    $scope.a=10;
    $scope.b=20;
}]);

app.controller('msg2',['$scope',function($scope){
    $scope.c=30;
    $scope.d=40;
}]);
