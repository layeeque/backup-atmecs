var express = require('express')
var Web3 = require('web3')
var cors = require('cors')
var solc = require('solc')
var fs = require('fs')
var _ = require('lodash');
const bodyParser = require('body-parser');
var app = express();
var deployedAddr = "";
var VotingContract;
var userAccounts = [];
app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.post('/login', function (req, res) {

    var users = JSON.parse(fs.readFileSync('./users/users.json'))
    console.log(users[0].ID)
    user = _.filter(users, { 'ID': req.body.ID, 'Password': req.body.Password });
    console.log(user.length)
    if (user.length != 0) {
        res.send(user);
    } else {
        res.send(false)
    }
})

app.get('/getQuestions', function (req, res) {
    return res.json(JSON.parse(fs.readFileSync('./question_and_answer/questions.json', 'utf8')))
})



var addParticipants = function () {
    console.log("I am in addParticipants" + deployedAddr)

    var ee = VotingContract.at(deployedAddr).addParticipants(userAccounts, { from: userAccounts[0] })
    console.log("return aayewala " + ee)
    // .then(function(result) {
    //     console.log(" from hum kale hai to dilwale hai " + result)
    // });

}
app.post('/submitAns', function (req, res) {
    var result = req.body;
    var score = 0;
    console.log(JSON.stringify(result))
    var refAnswer = JSON.parse(fs.readFileSync('./question_and_answer/answers.json'))
    console.log(JSON.stringify(refAnswer))
    for (var index = 0; index < 10; index++) {
        if (refAnswer[index].answer == result[index].answer) {
            score++;
        }

    }
    console.log('comming account' + result[10].Account)
    console.log("score is " + score)

    return res.json(addscore(result[10].Account, score))
})
app.post('/participateInExame', function (req, res) {
    var participant = req.body.participant;
    var instance = VotingContract.at(deployedAddr);

    var tt = instance.participateInExame(participant, { from: userAccounts[0] })
    res.send("anku cc" + participant + " " + tt)
    //res.sendStatus(200).end(score)


})

addscore = function (participant, score) {

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.addscore(participant, score, { from: userAccounts[0] })
    return tt + "your score is added in block chain";

}
app.post('/getContributorTaskList', function (req, res) {
    var participant = req.body.participant;

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.getContributorTaskList(participant, { from: userAccounts[0] })
    console.log("REC " + tt.length)
    res.send(tt)

})

app.post('/reg', function (req, res) {
    var participant = req.body.username;
    var Address = req.body.Address;

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.setContributor(Address, participant, { from: userAccounts[0] })
    res.send(tt)

})

// app.post('/setContributortaskStatus', function (req, res) {
//     var participant = "write blockchain"
//     var Address = "0x9a55f99112cb2358477ea6578c19b8f147c3f111";

//     var instance = VotingContract.at(deployedAddr);

//     var tt = instance.setContributortaskStatus(Address, 0, participant, { from: userAccounts[0], gas: 3000000 })
//     var tt = instance.setContributortaskStatus(Address, 1, participant, { from: userAccounts[0], gas: 3000000 })
//     var tt = instance.setContributortaskStatus(Address, 2, participant, { from: userAccounts[0], gas: 3000000 })
//     console.log("rec " + tt)
//     res.send(tt)

// })

app.post('/apply', function (req, res, next) {
    console.log("in apply rest service")
    var id = req.body.ID;
    var name = req.body.name;
    var Address = req.body.address;
    var obj = []
    data = fs.readFileSync('./users/apply.json', 'utf8', { 'flags': 'w+' })

    data = JSON.parse(data)

    for (var i = 0; i < data.length; i++) {
        if (data[i].Address == Address) {
            res.send("You have already applied for the task. Waiting for owners Approval") // write it back
            return;

        }

        obj[i] = data[i]
    }

    console.log("data in the file is " + obj)
    obj.push({
        "Name" : name,
        "Address": Address,
        "Taskid": id,
        "status": "pending",
        "BLadd":"no",
        "submit":"no"
    }); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFileSync('./users/apply.json', json);
    res.send("successfully applied for the task. Waiting for owners Approval") // write it back 

});




app.post('/getContributortaskStatus', function (req, res) {
    var participant = "write blockchain"
    var Address = "0x9a55f99112cb2358477ea6578c19b8f147c3f111";

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.getContributorTaskStatus(Address, { from: userAccounts[0], gas: 3000000 })
    //var tt = instance.setContributortaskStatus(Address,1, participant, { from: userAccounts[0],gas:3000000 })
    //var tt = instance.setContributortaskStatus(Address,2, participant, { from: userAccounts[0],gas:3000000 })
    console.log("rec " + tt)
    res.send(tt)

})

app.post('/AddBLC', function (req, res) {
    console.log("in AddBLC")

    var Taskid = req.body.taskid;
    var Address = req.body.address;
    var status = req.body.status;
     //status =Buffer.from(status, 'utf8').toString('hex');
     data = fs.readFileSync('./users/apply.json', 'utf8')

    data = JSON.parse(data)
    
    data.forEach(function (part) {
        console.log("************************************")
        console.log("add : "+part.Address)
        console.log("add : "+Address)
        console.log("taskid : "+part.Taskid )
        console.log("taskid : "+Taskid )
        console.log("status : "+ part.status)
        console.log("status : "+status )
        console.log("************************************")
       
        if (part.Address == Address && part.Taskid == Taskid && part.status == status) {
            console.log("before updation "+part.BLadd ) 
            
            part.BLadd="yes"
            console.log("after updation "+part.BLadd )
        }
    });
    fs.writeFileSync("./users/apply.json", JSON.stringify(data), 'utf8')



    var instance = VotingContract.at(deployedAddr);

    var tt = instance.setContributortaskStatus(Address,Taskid,status, { from: userAccounts[0], gas: 3000000 })
    //var tt = instance.setContributortaskStatus(Address,1, participant, { from: userAccounts[0],gas:3000000 })
    //var tt = instance.setContributortaskStatus(Address,2, participant, { from: userAccounts[0],gas:3000000 })
    console.log("rec " + tt)
    res.send(tt)

})

app.post('/getTaskStatus', function (req, res) {
    console.log("in change getTaskStatus")

    var ID = req.body.ID;
    console.log("ID ==== "+ ID)
    var instance = VotingContract.at(deployedAddr);

    var tt = instance.getContributorTaskStatus(ID, { from: userAccounts[0], gas: 3000000 })
    
    console.log("rec " + tt)
    res.send(tt)

})

app.post('/getTaskId', function (req, res) {
    console.log("In get taskID ")
    var acc = req.body.ID
  
    data = JSON.parse(fs.readFileSync('./users/apply.json', 'utf8', { 'flags': 'w+' }))
    for (var i = 0; i < data.length; i++) {
       
        if (data[i].Address == acc) {
            res.send(data[i].Taskid) // write it back
            return;

        }


    }

    res.send("no taskID found with matching Account")

})

app.post('/updateStatus', function (req, res) {
    console.log("In get updateStatus ")
    var acc = req.body.acc
    var id = req.body.id
    var newStatus = req.body.status
    var instance = VotingContract.at(deployedAddr);

    data = fs.readFileSync('./users/apply.json', 'utf8')

    data = JSON.parse(data)
    
    data.forEach(function (part) {
             
        if (part.Address == acc && part.Taskid == id ) {  
            part.status=newStatus
        }
    });
    fs.writeFileSync("./users/apply.json", JSON.stringify(data), 'utf8')

    var tt = instance.updateContributortaskStatus(acc,id,newStatus,{ from: userAccounts[0] })
    res.send(tt)
  

   
})

app.post('/submit', function (req, res) {
    console.log("In post submit ")
    var name = req.body.name
  

    data = fs.readFileSync('./users/apply.json', 'utf8')

    data = JSON.parse(data)
    
    data.forEach(function (part) {
             
        if (part.Address == name ) {  
            part.submit="yes"
        }
    });
    fs.writeFileSync("./users/apply.json", JSON.stringify(data), 'utf8')

    res.send("Successfully Submitted !!")
   
})
app.post('/getTask', function (req, res) {
    console.log("In get task")
    var Taskid = req.body.Taskid
    console.log("Task id is " + Taskid)
    data = JSON.parse(fs.readFileSync('./question_and_answer/questions.json', 'utf8', { 'flags': 'w+' }))
    for (var i = 0; i < data.length; i++) {
        console.log("data[i].id " + data[i].id)
        console.log("Taskid " + Taskid)
        console.log("***********************")
        if (data[i].id == Taskid) {
            res.send(data[i].question) // write it back
            return;

        }


    }

    res.send("no task found with matchin task id")

})

app.get('/getAllContributorUsernames', function (req, res) {
    console.log("In getAllContributorUsernames rest service ")
    var participant = req.body.username;
    var Address = req.body.Address;

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.getAllContributorUsernames({ from: userAccounts[0] })
    res.send(tt)

})

app.post('/getScore', function (req, res) {
    var participant = req.body.participant;

    var instance = VotingContract.at(deployedAddr);

    var tt = instance.getScore(participant, { from: userAccounts[0] })
    res.send(tt)

})

app.post('/myTask', function (req, res) {
    var participant = req.body.participant;
    console.log("participant in mytask is " + participant)
    data = JSON.parse(fs.readFileSync('./users/apply.json', 'utf8', { 'flags': 'w+' }))
    for (var i = 0; i < data.length; i++) {

        if (data[i].Address == participant) {

            res.json({
                "Taskid": data[i].Taskid,
                "status": data[i].status
            }) // write it back 
        }
    }
    res.send("you dont have any task pending, please apply for any task")
})

app.post('/changeStatus', function (req, res) {
    console.log("in change status")

    var Taskid = req.body.taskid;
    var Address = req.body.address;
    var status = req.body.status;
    var apply = req.body.apply;

    console.log("taskid " + Taskid)
    console.log("address " + Address)
    console.log("status " + status)


    data = fs.readFileSync('./users/apply.json', 'utf8')

    data = JSON.parse(data)
    
    data.forEach(function (part) {
       
        if (part.Address == Address && part.Taskid == Taskid && part.status == status) { 
            console.log("before update : "+part.status )
            if(apply =="reject")
            {
            part.status = "Rejected";
            }
            else
            {
                part.status = "Alloted";
            }
            console.log("after update : "+part.status )

           
        }
    });
    fs.writeFileSync("./users/apply.json", JSON.stringify(data), 'utf8')
    res.send("Task has been alloted to contributor by owner")
})
app.post('/changeStatusSubmit', function (req, res) {
    console.log("in changeStatusSubmit")

    var Taskid = req.body.taskid;
    var Address = req.body.address;
    var status = req.body.status;
    var apply = req.body.apply;

    console.log("taskid " + Taskid)
    console.log("address " + Address)
    console.log("status " + status)


    data = fs.readFileSync('./users/apply.json', 'utf8')

    data = JSON.parse(data)
    
    data.forEach(function (part) {
       
        if (part.Address == Address && part.Taskid == Taskid ) { 
            console.log("before update : "+part.status )
            if(apply =="reject")
            {
            part.submit = "no";
            }
            else
            {
                part.submit = "yes";
            }
            console.log("after update : "+part.status )

           
        }
    });
    fs.writeFileSync("./users/apply.json", JSON.stringify(data), 'utf8')
    res.send("Task has been alloted to contributor by owner")
})

app.get('/getApply', function (req, res) {

    console.log("in get apply")
    data = fs.readFileSync('./users/apply.json', 'utf8', { 'flags': 'w+' })

    res.send(data)
})

var BLdeploye = function (a, addParticipants) {
    console.log("I am in rest service")
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    var code = require('fs').readFileSync('./contracts/Examination.sol').toString()
    compiledCode = solc.compile(code)
    var getabi = compiledCode.contracts[':Examination'].interface
    // console.log(getabi)
    abi = JSON.parse(getabi)


    VotingContract = web3.eth.contract(abi);

    var byteCode = compiledCode.contracts[':Examination'].bytecode
    //console.log(byteCode)
    userAccounts = web3.eth.accounts;
    console.log(userAccounts);
    deployedContract = VotingContract.new(8, { data: byteCode, from: web3.eth.accounts[0], gas: 4700000 }, function (e, contract) {
        // var deployedAddr = "gaga";
        if (!e) {
            if (!contract.address) {
                //     console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
            } else {
                console.log("Contract mined! Address: " + contract.address);

                console.log("****************")
                console.log("deployed contract ## " + deployedContract)

                deployedAddr = deployedContract.address
                console.log("deployed address is " + deployedAddr)
                //instance = VotingContract.at(addr)

                // return res.json(deployedContract.sayHello.call())
                //             a()
                a(addParticipants)
            }
        } else {
            console.log(e);
        }
        // })


    })

}






app.listen(3000, function () {
    console.log('server is running on port 3000')
    BLdeploye(function (addParticipants, addr) {
        console.log("function called done" + userAccounts)
        fs.writeFileSync("./users/users.json", JSON.stringify([{
            "ID": "John@example.com",
            "Password": "john",
            "Account": userAccounts[1]
        }, {
            "ID": "Alice@example.com",
            "Password": "alice",
            "Account": userAccounts[2]
        }, {
            "ID": "Bob@example.com",
            "Password": "bob",
            "Account": userAccounts[3]
        }, {
            "ID": "Admin",
            "Password": "admin",
            "Account": userAccounts[0]
        }])


        )
        console.log("kakakakakaka" + addr)
        addParticipants()
    }, addParticipants)
});