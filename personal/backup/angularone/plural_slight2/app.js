angular.module('dialogDemo1', ['ngMaterial'])

    .controller('AppCtrl', function ($scope,$mdDialog) {
        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.message = 'atmecs technolgies';
       

        $scope.users = [{
            "name": "faiz"
        },
        { "name": "ali" },
        { "name": "salim" },
        { "name": "rizwan" },
        {
            "name": "noor"
        }];

        $scope.notes = [{
            "title": "Nishant Singh Gawer",
            "course": "Ethical Hacking",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "title": "Kartik Chandra Shukla",
            "course": "Angular JS",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "title": "Amit Uniya",
            "course": "NodeJS",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        },
       
        {
            "title": "Bhanu Prakash Reddy Mokkala",
            "course": "Artificial Intelligence",
            "lab": "12345",
            "date": "10/09/2017"
        }];

      
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
