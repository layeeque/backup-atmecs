var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/firstMessage', {
        // url: '/firstMessage',
        templateUrl: 'msg1.htm',
        controller: 'msg1'

    })
        .when('/secondMessage', {
            // url: '/secondMessage',
            templateUrl: 'msg2.htm',
            controller: 'msg2'

        })
        .when('/', {
            // url: '/',
            template: '<p> this is just a message </p>'


        });
    // .state('noroute',{
    //     url:'*path',
    //     template:'<p> no route available try clicking somethiong else</p>'
    // })

    // $urlRouterProvider.otherwise('/');


});

app.controller('msg1', ['$scope', function ($scope) {
    console.log("in first controller")
    $scope.a = 10;
    $scope.b = 20;
}]);

app.controller('msg2', ['$scope', function ($scope) {
    console.log("in second controller")
    $scope.c = 30;
    $scope.d = 40;
}]);
