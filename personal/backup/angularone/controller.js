var appX = angular.module('mainApp', []);

appX.controller('app', function ($scope) {
    $scope.searchEnter = function () {
        console.log(event.which || event.keyCode);
    };
});

appX.controller('timectrl',function($scope){
    var currentDate=new Date();
    $scope.timeString=currentDate.toTimeString();

});

appX.controller('buttonclicked',function($scope){
    $scope.updateTime=function(){
        console.log("button is cliked");
    var currentDate=new Date();
    $scope.newtimeString=currentDate.toTimeString();
    $scope.userName="";
    }

});