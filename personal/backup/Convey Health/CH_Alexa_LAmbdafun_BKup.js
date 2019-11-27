var https = require('https')
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

var hostip='99253c16.ngrok.io'


// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        /*console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
        

    if (event.session.application.applicationId !== "amzn1.ask.skill.bdf7c4ec-f508-4b9b-a341-22d60fbecc17") {
        context.fail("Invalid Application ID");
     }*/

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            console.log("I am in launch request")
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    getWelcomeResponse(callback)
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
     if (intentName === "greeting") {
     console.log("I am in greeting intent")
       
          var speechOutput = "Hi doctor. How may I help you"    
          var repromptText = "I am waiting for your response"
          var header ="hello"
          var shouldEndSession = false
         callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
    }
    
     if (intentName === "doctor") {

    var bodya= ""
    var data = ""
    var speechOutput = ""
    var repromptText = ""
    var header = ""
    var shouldEndSession = ""
    
    
     var docid = intent.slots.docname.value; 
   

 //  var body = querystring.stringify({"result": { "action": "doctorverify", "parameters": { "docid": "ravi" } } });
   var body = querystring.stringify({"action": "doctorverify", "docid": docid});

    var options = {
       
       host:hostip,
        port: '',
        path: '/echo',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body)
        }
    };
    console.log("Dr faiz ur rehman I am in doctor intent")
    
      var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          bodya += chunk
          console.log('Response: ' + chunk);
         });

        res.on('end', () => {
            this.data = JSON.parse(bodya)
             this.speechOutput = this.data.speech
             this.repromptText = this.data.speech
             this.header = "hello"
             this.shouldEndSession = false
           
              callback(session.attributes, buildSpeechletResponse(this.header, this.speechOutput, this.repromptText, this.shouldEndSession));
        });
      
        });
        
      req.write(body);
      
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.end();
} 
      else if (intentName === "address") {
    
          var speechOutput = "so you live in india"    
          var repromptText = "so you live in india"
          var header ="hello"
          var shouldEndSession = false
         
         callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
    }
    else if (intentName === "reportasked") {

          var speechOutput = "You need to authenticate yourself to know about the patients and their reports. May I know your name "    
          var repromptText = "You need to authenticate yourself to know about the patients and their reports. May I know your name "
          var header ="hello"
          var shouldEndSession = false
         
         callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
    }
    
    else if (intentName === "OTPverification") {
        console.log("I am in OTPverification function")
        var bodyaotp= ""
        var data = ""
        var speechOutput = ""
        var repromptText = ""
        var header = ""
        var shouldEndSession = ""
    
         var otp = intent.slots.xyz.value; 
         console.log("value of OTP entered is "+otp)
         var body = querystring.stringify({"action": "OTPverification", "otp": otp});
                
  var options = {
           
             host:hostip,
            port: '',
            path: '/echo',
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body)
            }
        };
        console.log("otp verification intent")
    
      var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          bodyaotp += chunk
          console.log('Response: ' + chunk);
         });

        res.on('end', () => {
            this.data = JSON.parse(bodyaotp)
             this.speechOutput = this.data.speech
             this.repromptText = this.data.speech
             this.header = "hello"
             this.shouldEndSession = false
           
              callback(session.attributes, buildSpeechletResponse(this.header, this.speechOutput, this.repromptText, this.shouldEndSession));
        });
      
        });
        
      req.write(body);
      
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.end();
         
    }
     else if (intentName === "patientVerify") {
        console.log("I am in patientVerify function")
        var bodya= ""
        var data = ""
        var speechOutput = ""
        var repromptText = ""
        var header = ""
        var shouldEndSession = ""
    
         var pid = intent.slots.pid.value; 
         console.log("value of pid entered is "+pid)
         var body = querystring.stringify({"action": "patientVerify", "pid": pid});
                
  var options = {
         
             host:hostip,
            port: '',
            path: '/echo',
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body)
            }
        };
        console.log("patientVerify intent")
    
      var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          bodya += chunk
          console.log('Response: ' + chunk);
         });

        res.on('end', () => {
            this.data = JSON.parse(bodya)
             this.speechOutput = this.data.speech
             this.repromptText = this.data.speech
             this.header = "hello"
             this.shouldEndSession = false
           
              callback(session.attributes, buildSpeechletResponse(this.header, this.speechOutput, this.repromptText, this.shouldEndSession));
        });
      
        });
        
      req.write(body);
      
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.end();
         
    }
      else if (intentName === "patientReportVerify") {
        console.log("I am in patientReportVerify function")
        var bodya= ""
        var data = ""
        var speechOutput = ""
        var repromptText = ""
        var header = ""
        var shouldEndSession = ""
    
         var reportid = intent.slots.reportid.value; 
         console.log("value of reportid entered is "+reportid)
         var body = querystring.stringify({"action": "patientReportVerify", "reportid": reportid});
                
  var options = {
           
             host:hostip,
            port: '',
            path: '/echo',
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body)
            }
        };
        console.log("patientReportVerify intent")
    
      var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          bodya += chunk
          console.log('Response: ' + chunk);
         });

        res.on('end', () => {
            this.data = JSON.parse(bodya)
             this.speechOutput = this.data.speech
             this.repromptText = this.data.speech
             this.header = "hello"
             this.shouldEndSession = false
           
              callback(session.attributes, buildSpeechletResponse(this.header, this.speechOutput, this.repromptText, this.shouldEndSession));
        });
      
        });
        
      req.write(body);
      
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.end();
         
    }
         else if (intentName === "doctorChoiceEntry") {
        console.log("I am in doctorChoiceEntry function")
        var bodya= ""
        var data = ""
        var speechOutput = ""
        var repromptText = ""
        var header = ""
        var shouldEndSession = ""
    
         var doctorchoiceent = intent.slots.doctorchoiceent.value; 
         console.log("value of reportid entered is "+doctorchoiceent)
         var body = querystring.stringify({"action": "doctorChoiceEntry", "doctorchoiceentry": doctorchoiceent});
                
  var options = {
            
             host:hostip,
            port: '',
            path: '/echo',
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body)
            }
        };
        console.log("doctorChoiceEntry intent")
    
      var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          bodya += chunk
          console.log('Response: ' + chunk);
         });

        res.on('end', () => {
            this.data = JSON.parse(bodya)
             this.speechOutput = this.data.speech
             this.repromptText = this.data.speech
             this.header = "hello"
             this.shouldEndSession = false
           
              callback(session.attributes, buildSpeechletResponse(this.header, this.speechOutput, this.repromptText, this.shouldEndSession));
        });
      
        });
        
      req.write(body);
      
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.end();
         
    }
     
    else {
        throw "Invalid intent of lambda function of convey health"
    }
     
}
   
/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {
    console.log("I am in getWelcomeResponse request")
    var speechOutput = "Hi doctor. How may I help you"
    var reprompt = "I am waiting for your response"
    var header = "Reindeer Facts!"
    var shouldEndSession = false
    var sessionAttributes = {
        "speechOutput" : speechOutput,
        "repromptText" : reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession))

}

// 

// ------- Helper functions to build responses for Alexa -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

function capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}