const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
var https = require('https');
var nodemailer = require('nodemailer');
const restService = express();
var username = "";
var pass = "";

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
restService.post('/echo', function (req, res) {
    console.log("i am in rest sevice block");

    if (req.body.result.action == "turnon") {
        var accountSid = 'ACdbbe8f49575a4bd7b1ebddd8eca1cb71';
        var authToken = '4ebf6cd353dc9d3e17700febff68f059';

        //require the Twilio module and create a REST client 
        var client = require('twilio')(accountSid, authToken);

        client.messages.create({
            to: "+918669008659",
            from: "+16172863888",
            body: "Your request for activation of SMS alerts has been processed - Conquerors Bank",
        }, function (err, message) {
            console.log(message.sid);
        });
    }
    if (req.body.result.action == "turnoff") {
        var accountSid = 'ACdbbe8f49575a4bd7b1ebddd8eca1cb71';
        var authToken = '4ebf6cd353dc9d3e17700febff68f059';

        //require the Twilio module and create a REST client 
        var client = require('twilio')(accountSid, authToken);

        client.messages.create({
            to: "+918669008659",
            from: "+16172863888",
            body: "You have successfully unsubcribed from SMS alerts - Conquerors Bank",
        }, function (err, message) {
            console.log(message.sid);
        });
    }

    if (req.body.result.action == "pin") {
        console.log("i am in pin block");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akshayjadhav105@gmail.com',
                pass: 'akshay1995'
            }
        });

        var mailOptions = {
            from: 'akshayjadhav105@gmail.com',
            to: 'aplabot@gmail.com',
            subject: '[Conquerors] Your New ATM PIN Details Inside',
            text: 'Hi akshay, \n\n Your new ATM PIN has been generated and sent via courier. You will receive the tracking details shortly. \n\n\n Best Regards, \n Conquerers'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }
    if(req.body.result.action == "reg")
     {

        console.log("i am in else block");


        account = req.body.result && req.body.result.parameters && req.body.result.parameters.account ? req.body.result.parameters.account : "Seems like some problem. Speak again."
        details = req.body.result && req.body.result.parameters && req.body.result.parameters.name ? req.body.result.parameters.name : "Seems like some problem. Speak again."
        email = req.body.result && req.body.result.parameters && req.body.result.parameters.email ? req.body.result.parameters.email : "Seems like some problem. Speak again."

        console.log(req.body);

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "bot"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO customers (account, details) VALUES ('" + account + "', '" + details + "')";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                return res.json({
                    speech: "record inserted",
                    displayText: "record inserted",
                    source: 'webhook-echo-sample',


                });
            });
        });


        //=================sms code=============



        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akshayjadhav105@gmail.com',
                pass: 'akshay1995'
            }
        });

        var mailOptions = {
            from: 'akshayjadhav105@gmail.com',
            to: '' + email + '',
            subject: '[Conquerors] New Bank Account Details Inside',
            text: 'Hi, \n\n Thanks for your interest in opening ' + account + ' account. Our representative will contact you for verification and further process. \n\n Best Regards, \n Conquerers '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }




});







restService.post('/slack-test', function (req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }

    });
});



restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening urweyruwery")

});