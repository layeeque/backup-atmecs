  angular.module("demo", ["bombshock.gauge"]);

  angular.module("demo").run(function ($rootScope, $timeout) {


    $rootScope.hover = function ($event, path) {
      console.log("$event", $event);
      console.log("path", path);
    };

    $rootScope.randomizedata = function () {
      $rootScope.showPercent = false;
     
      $rootScope.data = [10,10,10,10,10,50,50];
    };
  });

 
