angular.module('dialogDemo1', ['ngMaterial', 'ngMessages'])

    .controller('AppCtrl', function ($scope, $mdDialog, $mdSidenav, $mdToast, $document) {

        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.message = 'atmecs technolgies';
        $scope.status = "";
        $scope.optionclicked = "";
        $scope.topDirections = ['left', 'up'];
        $scope.bottomDirections = ['down', 'right'];

        $scope.isOpen = true;

        $scope.availableModes = ['md-fling', 'md-scale'];
        $scope.selectedMode = 'md-fling';

        $scope.availableDirections = ['up', 'down', 'left', 'right'];
        $scope.selectedDirection = 'down';
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);

        $scope.items = [{ option: "contact us" }, { option: "login" }, { option: "Terms of use" }, { option: "Privacy policy" }, { option: "logout" }];
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
            "id": "1",
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
            "id": "2",
            "title": "Bhanu Prakash Reddy Mokkala",
            "course": "Artificial Intelligence",
            "lab": "12345",
            "date": "10/09/2017"
        }];
        $scope.options = function (clickedoption) {
            $scope.optionclicked = clickedoption;

        }
        $scope.openLeftMenu = function (title, course, lab, date, id) {
            $scope.title = title;
            $scope.course = course;
            $scope.lab = lab;
            $scope.date = date;
            $scope.id = id;


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
    })
    .config(function ($mdIconProvider) {
        $mdIconProvider
            .iconSet('call', 'img/correct.svg', 24);
    })
    .config(function ($mdIconProvider) {
        $mdIconProvider
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })
    .filter('keyboardShortcut', function ($window) {
        return function (str) {
            if (!str) return;
            var keys = str.split('-');
            var isOSX = /Mac OS X/.test($window.navigator.userAgent);

            var seperator = (!isOSX || keys.length > 2) ? '+' : '';

            var abbreviations = {
                M: isOSX ? '⌘' : 'Ctrl',
                A: isOSX ? 'Option' : 'Alt',
                S: 'Shift'
            };

            return keys.map(function (key, index) {
                var last = index == keys.length - 1;
                return last ? key : abbreviations[key];
            }).join(seperator);
        };
    })
    // .controller('DemoBasicCtrl', function DemoCtrl($mdDialog) {
    //     this.settings = {
    //         printLayout: true,
    //         showRuler: true,
    //         showSpellingSuggestions: true,
    //         presentationMode: 'edit'
    //     };

    //     this.sampleAction = function (name, ev) {
    //         $mdDialog.show($mdDialog.alert()
    //             .title(name)
    //             .textContent('You triggered the "' + name + '" action')
    //             .ok('Great')
    //             .targetEvent(ev)
    //         );
    //     }
    // });

    //  $scope.clicked = function(){
    //    window.location = "https://www.facebook.com";
 //}
