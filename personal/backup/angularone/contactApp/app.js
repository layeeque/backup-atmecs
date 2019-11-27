var abc = angular.module("contactApp", []);

abc.controller("contactCtrl",contactctrl) ;
abc.controller("headerCtrl",headerctrl) ;
abc.controller("footerCtrl",footerctrl) ;

abc.factory("helloworld",function(){
    return "hello returned from factory 123";
});


function contactctrl($scope){
$scope.contacts = [{
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "zack",
            "last": "obrien"
        },
        "location": {
            "street": "3602 homestead rd",
            "city": "scurry",
            "state": "nebraska",
            "postcode": 62318
        },
        "email": "zack.obrien@example.com",
        "login": {
            "username": "greensnake628",
            "password": "callaway",
            "salt": "fQUCAngn",
            "md5": "8dfb1df10368815c92e22cf27cce2ad5",
            "sha1": "0647596015a79c831086efb4c362119c23cb729e",
            "sha256": "0dc8c11e02451f9651d506693f96c81debc8f99b79858427306ff27917b3ac7a"
        },
        "dob": "1995-01-19 03:37:36",
        "registered": "2007-08-25 18:38:19",
        "phone": "(440)-064-6640",
        "cell": "(336)-134-9336",
        "id": {
            "name": "SSN",
            "value": "583-42-0228"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/1.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
        },
        "nat": "US"
    }]


};

function headerctrl(helloworld){
      this.title2 =helloworld;
     // helloworld();
}

function footerctrl(helloworld){
      this.title1 = helloworld;
      // helloworld();
}




