angular.module('myExame')
    .controller('testController', ['$scope', 'loginInfo', 'questions', '$http', '$location','getapply',
        function ($scope, loginInfo, questions, $http, $location,getapply) {
            console.log("test ctrl reloaded")
            $scope.id = loginInfo.getData().Account;
            console.log('acc is here' + $scope.id)
            $scope.a1;
            $scope.getid = (id) => {
                $scope.a1 = "m" + id;

            }
            startTest = () => {

                $http.get('http://localhost:3000/getQuestions').then(function (data1) {
                    console.log("received data is " + data1.data)
                    // $scope.questions = mm;
                    $scope.questions = data1.data
                 
                    var q = [];
                    for (let index = 0; index < $scope.questions.length; index++) {
                        const element = $scope.questions[index];
                        element.ans = element.id
                        q.push(element);
                    }
                    $scope.questions = q;

                    $http.get('http://localhost:3000/getApply').then(function (data1) {
                      
                        
                         for (let index = 0; index <  data1.data.length; index++) {
                      
                            if(  $scope.id ==data1.data[index].Address )
                            {
                                $scope.apply=data1.data[index]
                            }
                        }
                        
        
                      
                    })
                })
            }
            startTest();
            // $scope.submitAns = function () {
            //     var result = [];
            //     for (let index = 0; index < $scope.questions.length; index++) {
            //         const element = $scope.questions[index];
            //         var rest = {
            //             "id": $scope.questions[index].id,
            //             "answer": (element.ans == 'A' || element.ans == 'B' || element.ans == 'C' || element.ans == 'D') ? element.ans : 0
            //         }
            //         result.push(rest);

            //     }
            //     console.log("final result" + JSON.stringify(result))
            //     console.log('Account is' + $scope.id)
            //     result.push({ "Account": $scope.id });
            //     $http.post('http://localhost:3000/submitAns', result).then(function (data1) {
            //         console.log("redirecting to result page " + data1.data)

            //         $location.path('/result')

            //     })


            // }

            $scope.applyFunction = function (ckType) {
                
                if($scope.checktype != ckType)
                {
                $scope.checktype = ckType
              
                }
                else{
                $scope.checktype = undefined
                    
                }


                datam = {
                    "name": loginInfo.getData().ID,
                    "ID": ckType + 100,
                    "address": $scope.id
                }
                $http.post('http://localhost:3000/apply', datam).then(function (data1) {
                    console.log("received data is " + data1.data)
                    $scope.msg = data1.data

                })

            }
            $scope.sumbitTask = function(sub){
                datam = {
                    "name": loginInfo.getData().ID,
                }

     
                $http.post('http://localhost:3000/submit', datam).then(function (data1) {
                    console.log("received data is " + data1.data)
                    $scope.msg = data1.data
                   

                })

            }
        }



    ])