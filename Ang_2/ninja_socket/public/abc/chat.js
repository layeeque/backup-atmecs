// make connection
var socket = io.connect('http://localhost:4000');
console.log(socket)
//  var score = "";
//  document.getElementById('scorenum').innerHTML=score
// Emit events

//  socket.emit('score',{
//      "score":score
//  })
function fun() {
    var message = document.getElementById('message').value,
    handle = document.getElementById('handle').value,
    btn = document.getElementById('send'),
    output = document.getElementById('output');
    socket.emit('chat', {
        "message": message,
        "handle": handle
    });
    
};

// Listen for events
socket.on('chat', function (data) {
    console.log("received data " + JSON.stringify(data))
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('score',function(data){
    console.log("received from score socket "+JSON.stringify(data))
    document.getElementById('scorenum').innerHTML=data.score
})

