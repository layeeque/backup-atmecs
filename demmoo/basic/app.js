var express = require('express')
var path =require('path')
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    var path1= path.join(__dirname,'public','index.html')
    console.log(path1)
    res.sendFile(path1)
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server has started successfully parbhani")
})