const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
var https = require('https');
var nodemailer = require('nodemailer');
const restService = express();
var username = "";
var pass = "";
var valotp = "";
var patientNumber;

var total_reports_patient = "";
var report_name = "";

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
restService.post('/echo', function (req, res) {
    console.log("i am in rest sevice block");
    console.log("required action is " + req.body.result.action)

    if (req.body.result.action == "doctorverify") {
        docid = req.body.result && req.body.result.parameters && req.body.result.parameters.docid ? req.body.result.parameters.docid : "Seems like some problem. Speak again."
        console.log("doctor id is " + docid)
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "conveyhealth"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "select name from doctor where name='" + docid + "'";
            con.query(sql, function (err, rows, fields) {
                console.log("query fired " + rows)


                if (err)
                    return callback(new Error('Error while performing query'), null);
                if (rows.length !== 1) {
                    // return callback(new Error('Failed to find exactly one user'), null);
                    con.end();
                    return res.json({
                        speech: "Invalid Doctor...Retry Again",
                        displayText: "Invalid Doctor...Retry Again",
                        source: 'webhook-echo-sample',
                    });
                }
                else {
                    var accountSid = 'ACf00fde152cab3a6b32977594cbab2275';
                    var authToken = '01bb426394afec8785a299c137430c8c';

                    //require the Twilio module and create a REST client 
                    var client = require('twilio')(accountSid, authToken);
                    valotp = Math.floor(1000 + Math.random() * 9000);
                    console.log(valotp);

                    // client.messages.create({
                    //     to: "+918446290432",
                    //     from: "+14073262341",
                    //     body: "Your OTP for request is " + valotp,
                    // })
                    //     .then((message) => console.log(message.sid));
                    // con.end();


                    return res.json({
                        speech: "You are a registered doctor. please type OTP, sent to your Registered mobile number for verification",
                        displayText: "You are a registered doctor. please type OTP, sent to your Registered mobile number for verification",
                        source: 'webhook-echo-sample',


                    });
                }
            })
        })
    };

    if (req.body.result.action == "OTPverification") {
        console.log("otp verification")

        otp = req.body.result && req.body.result.parameters && req.body.result.parameters.otp ? req.body.result.parameters.otp : "Seems like some problem. Speak again."
        if (otp == valotp) {
            console.log("correct otp")

            return res.json({
                speech: "Enter patient ID for reports",
                displayText: "Enter patient ID for reports",
                source: 'webhook-echo-sample',


            });
        }
        else {
            console.log("wrong OTP")
            return res.json({
                speech: "Invalid OTP. Retry again...",
                displayText: "Invalid OTP. Retry again...",
                source: 'webhook-echo-sample',


            });
        }
    }


    if (req.body.result.action == "patientReportVerify") {
        console.log("patient Report Verify")

        reportid = req.body.result && req.body.result.parameters && req.body.result.parameters.reportid ? req.body.result.parameters.reportid : "Seems like some problem. Speak again."
        if ((total_reports_patient + 1) == reportid) {

            console.log("for all the reports block");
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'layeequerehman@gmail.com',
                    pass: '9373950389'
                }
            });

            var mailOptions = {
                from: 'layeequerehman@gmail.com',
                to: 'layeequerehman@gmail.com',
                subject: 'Details regarding the patients',
                text: 'Hi Doctor, \n\n Please find the details of the patients below. \n\n\n Best Regards, \n Convey Health'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })
            return res.json({
                speech: " All the Report has been sent to the registered Email",
                displayText: " All the Report has been sent to the registered Email",
                source: 'webhook-echo-sample',
            });

        }

        else {
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "root",
                database: "conveyhealth"
            });
            con.connect(function (err) {
                if (err) throw err;
                console.log("Connected!");
                //var sql = "select * from patient where id="+patientNumber;
                var sql = "select report from reportlist where pid=" + patientNumber + " and reportno=" + reportid;
                con.query(sql, function (err, rows, fields) {
                    //console.log("selected report is " + rows[0].report)



                    if (err)
                        return callback(new Error('Error while performing query'), null);
                    if (rows.length < 1) {
                        //return callback(new Error('Failed to find exactly one user'), null);
                        con.end();
                        return res.json({
                            speech: "Invalid Report ID...Retry Again",
                            displayText: "Invalid Report ID...Retry Again",
                            source: 'webhook-echo-sample',

                        });
                    }

                    else {
                        con.end();
                        report_name = rows[0].report
                        console.log("value of rows[0].report is " + rows[0].report)
                        console.log("value of reportid is " + reportid)

                        if (total_reports_patient >= reportid) {

                            // console.log("i am in pin block");
                            // var transporter = nodemailer.createTransport({
                            //     service: 'gmail',
                            //     auth: {
                            //         user: 'layeequerehman@gmail.com',
                            //         pass: '9373950389'
                            //     }
                            // });

                            // var mailOptions = {
                            //     from: 'layeequerehman@gmail.com',
                            //     to: 'layeequerehman@gmail.com',
                            //     subject: 'Details regarding the patients',
                            //     text: 'Hi Doctor, \n\n Please find the details of ' + rows[0].report + ' report of the patient with patient ID ' + patientNumber + ' below. \n\n\n Best Regards, \n Convey Health'
                            // };

                            // transporter.sendMail(mailOptions, function (error, info) {
                            //     if (error) {
                            //         console.log(error);
                            //     } else {
                            //         console.log('Email sent: ' + info.response);
                            //     }
                            // })
                            // return res.json({
                            //     speech: rows[0].report + " Report has been sent to the registered Email",
                            //     displayText: rows[0].report + " Report has been sent to the registered Email",
                            //     source: 'webhook-echo-sample',
                            // });
                            return res.json({
                                speech: "What are you interested in [1].Issue, [2].Visit Details [3].Detail report ",
                                displayText: "What are you interested in [1].Issue, [2].Visit Details [3].Detail report",
                                source: 'webhook-echo-sample',
                            });

                        }

                        // return res.json({
                        //     speech: "Patient with ID " + patientNumber + " has " + rows[0].report + " reports. Please type the number of report you are interested in",
                        //     displayText: "Patient with ID " + patientNumber + " has " + rows[0].report + " reports. Please type the number of report you are interested in",
                        //     source: 'webhook-echo-sample',
                        // });


                    }
                });
            });

        }
    }

    if (req.body.result.action == "patientVerify") {
        var totalreport = "";
        patientNumber = req.body.result && req.body.result.parameters && req.body.result.parameters.patientid ? req.body.result.parameters.patientid : "Seems like some problem. Speak again."
        console.log("patientnumber is " + patientNumber)
        console.log("in patient verify service")
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "conveyhealth"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            //var sql = "select * from patient where id="+patientNumber;
            var sql = "select report from patient where id=" + patientNumber;
            con.query(sql, function (err, rows, fields) {
                totalreport = rows[0].report;
                console.log("total reports= " + totalreport)
                total_reports_patient = totalreport;
                if (err)
                    return callback(new Error('Error while performing query'), null);
                if (rows.length < 1) {
                    //return callback(new Error('Failed to find exactly one user'), null);
                    con.end();
                    return res.json({
                        speech: "Invalid Patient...Retry Again",
                        displayText: "Invalid Patient...Retry Again",
                        source: 'webhook-echo-sample',

                    });
                }
                console.log("aaaaaaafffffffffffffffaaa")

                var sql = "select report from reportlist where pid=" + patientNumber;
                con.query(sql, function (err, rows, fields) {
                    console.log("the value of rows is " + rows)
                    var rep = [];
                    for (var i = 0; i < totalreport; i++) {
                        console.log("I am in for loop")
                        console.log(rows[i].report)
                        rep[i] = " [" + (i + 1) + "]." + rows[i].report;

                    }
                    rep[i] = " [" + (i + 1) + "].For All the reports";
                    con.end();
                    console.log("patient are having reports==== " + rep)
                    return res.json({
                        speech: "Patient with ID " + patientNumber + " has " + totalreport + " reports. " + rep + ". Please type the report number you are interested in",
                        displayText: "Patient with ID " + patientNumber + " has " + rep + " reports. Please type the report number you are interested in",
                        source: 'webhook-echo-sample',
                    });
                })
            })

        });
    }

    if (req.body.result.action == "doctorChoiceEntry") {
        var totalreport = "";
        doctorchoice = req.body.result && req.body.result.parameters && req.body.result.parameters.doctorchoiceentry ? req.body.result.parameters.doctorchoiceentry : "Seems like some problem. Speak again."
        console.log("doctor choice is " + doctorchoice)
        console.log("doctorchoiceentry")
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "conveyhealth"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            console.log("value in patientnumber is " + patientNumber)
            console.log("value in report_name is " + report_name)
            // con.query(sql, function (err, rows, fields) {
            if (doctorchoice == "issue") {
                var sql = "select issue from reportlist where pid=" + patientNumber + " and report='" + report_name + "'";
                con.query(sql, function (err, rows, fields) {
                    return res.json({
                        speech: rows[0].issue + " issue",
                        displayText: rows[0].issue + " issue",
                        source: 'webhook-echo-sample',
                    });
                })
            }
            if (doctorchoice == "visit") {
                var sql = "select visit from reportlist where pid=" + patientNumber + " and report='" + report_name + "'";
                con.query(sql, function (err, rows, fields) {
                    return res.json({
                        speech: rows[0].visit + " visit",
                        displayText: rows[0].visit + " visit",
                        source: 'webhook-echo-sample',
                    });
                })
            }
            if (doctorchoice == "detail") {
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'layeequerehman@gmail.com',
                        pass: '9373950389'
                    }
                });

                var mailOptions = {
                    from: 'layeequerehman@gmail.com',
                    to: 'layeequerehman@gmail.com',
                    subject: 'Details regarding the patients',
                    text: 'Hi Doctor, \n\n Please find the details of report of the patient with patient ID  below. \n\n\n Best Regards, \n Convey Health'
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                })
                return res.json({
                    speech: " Report has been sent to the registered Email",
                    displayText: " Report has been sent to the registered Email",
                    source: 'webhook-echo-sample',
                });

            }
            // totalreport = rows[0].report;
            // console.log("total reports= " + totalreport)
            // total_reports_patient = totalreport;
            // if (err)
            //     return callback(new Error('Error while performing query'), null);
            // if (rows.length < 1) {
            //     //return callback(new Error('Failed to find exactly one user'), null);
            //     con.end();
            //     return res.json({
            //         speech: "Invalid Patient...Retry Again",
            //         displayText: "Invalid Patient...Retry Again",
            //         source: 'webhook-echo-sample',

            //     });
            // }
            // console.log("aaaaaaafffffffffffffffaaa")

            // var sql = "select report from reportlist where pid=" + patientNumber;
            // con.query(sql, function (err, rows, fields) {
            //     console.log("the value of rows is " + rows)
            //     var rep = [];
            //     for (var i = 0; i < totalreport; i++) {
            //         console.log("I am in for loop")
            //         console.log(rows[i].report)
            //         rep[i] = " [" + (i + 1) + "]." + rows[i].report;

            //     }
            //     rep[i] = " [" + (i + 1) + "].For All the reports";
            //     con.end();
            //     console.log("patient are having reports==== " + rep)
            //     return res.json({
            //         speech: "Patient with ID " + patientNumber + " has " + totalreport + " reports. " + rep + ". Please type the report number you are interested in",
            //         displayText: "Patient with ID " + patientNumber + " has " + rep + " reports. Please type the report number you are interested in",
            //         source: 'webhook-echo-sample',
            //     });
            // })
            // })

        });
    }

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

});

restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening at port 8000")

});
