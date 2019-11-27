const express = require('express');
const bodyParser = require('body-parser');
var AWS = require('aws-sdk');
const restService = express();
restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
restService.post('/echo', function (req, res) {
    console.log("hello world !!!!!!!!!!")
    AWS.config.update({accessKeyId: 'AKIAI3HGCXYPZDNISSZQ', secretAccessKey: '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', region: "us-west-2"});

    var lambda = new AWS.Lambda();
    var params = {
      FunctionName: 'palindrome', /* required */
      Payload: "12321"
    
    };
    lambda.invoke(params, function(err, data) {
      if (err){ console.log(err, err.stack);
        res.send("failure")
     }  // an error occurred
      else  {  console.log(data); 
                res.send("success") }            // successful response
    });

});

restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening urweyruwery")

});