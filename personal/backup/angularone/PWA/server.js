var express = require('express');
var path = require('path');

var app = express();

 var port = process.env.port || 3000;

//Setting up the server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
	// res.send('Hello');
})
app.listen(port, function () {
    console.log('Server running on port : ' + port)

})


// app.use(express.static(__dirname + '/resources'));
// app.use('/resources', express.static(__dirname + '/resources'));

// app.use(express.static(__dirname + '/js'));
// app.use('/js', express.static(__dirname + '/js'));

app.use('/', express.static(__dirname));