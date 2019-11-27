angular.module('dialogDemo1', ['ngMaterial'])

    .controller('AppCtrl', function ($scope, $mdDialog, $mdSidenav, $mdToast, $document) {

        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.message = 'atmecs technolgies';
        $scope.status = "";
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);


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
            "id": "2",
            "title": "Nishant Singh Gawer",
            "course": "Ethical Hacking",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "id": "3",
            "title": "Kartik Chandra Shukla",
            "course": "Angular JS",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "id": "4",
            "title": "Amit Uniya",
            "course": "NodeJS",
            "lab": "12345",
            "date": "10/09/2017"
        }, {
            "id": "5",
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        }, {
            "id": "5",
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        }, {
            "id": "5",
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        }, {
            "id": "5",
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        },
        {
            "id": "5",
            "title": "V S S R Dhanapathi Marepalli",
            "course": "Devops",
            "lab": "12345",
            "date": "10/09/2017"
        },

        {
            "id": "1",
            "title": "Bhanu Prakash Reddy Mokkala",
            "course": "Artificial Intelligence",
            "lab": "12345",
            "date": "10/09/2017"
        }];
        $scope.openLeftMenu = function (title, course, lab, date) {
            $scope.title = title;
            $scope.course = course;
            $scope.lab = lab;
            $scope.date = date;


            $mdSidenav('left').toggle();
        };
        $scope.tog = function () {


            $mdSidenav('left').toggle();
        };
        $scope.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title(' DEACTIVATION')
                .textContent('Would you like to DEACTIVATE the account?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('YES')
                .cancel('NO');


            $mdDialog.show(confirm).then(function () {
                $scope.status = 'you have deactivated the account.';
                $scope.showToast($scope.status);
            }, function () {
                $scope.status = '';
            });
        };
        $scope.showConfirm1 = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title(' ACTIVATION')
                .textContent('Would you like to ACTIVATE the account?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('YES')
                .cancel('NO');

            $mdDialog.show(confirm).then(function () {
                $scope.status = 'you have activated the account.';
                console.log("account activation");
                $scope.showToast($scope.status);

            }, function () {
                $scope.status = '';

            });
        };
        $scope.showToast = function (status) {
            var toast = $mdToast.simple()
                .textContent(status)
                .action('OK')
                .highlightAction(false)
                .position('bottom right');

            $mdToast.show(toast).then(function (response) {
                if (response == 'ok') {
                    alert(status);
                }
            });
        }
    })



    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
