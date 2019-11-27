var express = require('express');
var socket = require('socket.io');
 var score = 5 ;
var socket;

// App setup
var app = express();

// app.use(express.static(__dirname+'/index.html'));
// app.get('/',function(req,res){
//     res.sendFile(__dirname+ '/index.html');
// })

var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000');
});

//app.use(express.static('public'));

app.use('/', express.static('public/abc'))
// socket setup

var io = socket(server);

app.get('/score',function(req,res){
    console.log("value of score previous restservice "+ score)
    score=score+1;
    io.sockets.emit('score',{
        "score":score
    })
    console.log("value of score after restservice"+ score)
    return res.json({"result":"success"})
});

io.on('connection', function(socket) {
    this.socket=socket;
    console.log('made socket connection', socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    // socket.on('score',function(data){
    //     console.log("value of score previous "+ score)
    //     score=data.score
    //     console.log("value of score after "+ score)
    // })

});

