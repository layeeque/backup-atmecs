var express= require ('express')
var app = express();
var cors=require('cors')
app.use(cors())

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/a',function(req,res){
    console.log("I am in rest service")
    //res.send('this is the contact page');
    res.send('this is the contact page');
})

app.get('/a/:id',function(req,res){
    res.send('you requested the profile page of ' + req.params.id);
})

app.listen(3000,function(){
    console.log("***** Server Started *********")
});