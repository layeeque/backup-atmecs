const notifier = require('mail-notifier');
var Imap = require('imap'),
inspect = require('util').inspect;
var fs = require('fs'), fileStream;
var cmd = require('node-cmd');
const request = require('request');
const firebase = require('firebase');
const admin = require('firebase-admin');


var imap1 = {
    user: "bprakashr@gmail.com",
    password: "pravi2918",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};

var config = {
    apiKey: "AIzaSyBhNe5-Az_vtaOV5OQDpQiL1ArP7_0iykE",
    authDomain: "sentdb-cc163.firebaseapp.com",
    databaseURL: "https://sentdb-cc163.firebaseio.com",
    projectId: "sentdb-cc163",
    storageBucket: "sentdb-cc163.appspot.com",
    messagingSenderId: "607636642308"
  };
firebase.initializeApp(config);

admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'sentdb-cc163',
      clientEmail: 'firebase-adminsdk-51wri@sentdb-cc163.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCU10UmJVoLytex\nVM0XhE9ttKA2d75usyIm+SxsM85ATq7mDPF3u+AUSNgX/MOKk+A4u+iKwQdxZFJ5\n8noDGvOmdXBlIsQ9yQ5VrZWm5++1GaNT/Gz+ultnUZkYuJIFgd95l8ZEsyNmQ3pP\nltUhMRpaeQnib3hRfJZvotjgWdqRGsYsVUAR61BL53buQ496C8Wk0dg+z9EOnQQe\nIrtENudbbxCPvxt5QHdOGREq5e0HKRzkwEwbS/9NKfmysc1ORAly2SmGyrF2s54N\nftKMng3DCl/2HNEOWA8VDtnm3ngzau6fQRUejZuBgtYRhCZa0aeREue1WhDm4Vz4\nOha70JK1AgMBAAECggEADJFqFRDPW/9agjtTMoEPuFRDUp+yDiS38nGIFwtMbbEX\nL9uRu8oHkr7p6SPRtFuZpQ2QH8AX63+/2FNDJHL73I2+TWC63S3wG26UArfczYtN\nXgcKtXtLKSjCbcxCbEIHFEkRsVuTcCWsTmWOnp+UuZhoRZBv3CjSIFNKAkiKd6xM\n0XqU5ZMwRj/GAGo3mZ2Y8gpSbB/QEDBMHd9AfGWydLkOP7UC+wCRMTtZAYxDTVjE\nNg9trJaZKQnFYE8FbiPOFgH7eSSw2l2RZl8iyQTH4E7J+KaxdzN5pgE1va4UcOa/\nvX2mfGy6SrgJP/NTYlThTD4j1imP7u0TLM0EzWkNewKBgQDI4IDsLhMDE9JSEeCN\nPTtPKHFLMKPgZLmCwlG7AU/uyyVpYGnjop1sldbmMuGyASiOvLsgQGqYwxZvcH+U\n4uSMFXa91eWgXNtv48PM5qLRzlTv/G7O7/q2w2pGUHUjCPqqtnRiJEtfMdaCDrKz\nP5jWasz52BtJLV/+5qkDPuN5YwKBgQC9r0LnpcJ26DnOvROvex9ZBVnRNWO3fF2g\nsAQquK6KRzD0u5iUDsfkojkLJrMCTZ+05erAHSsMoqcqVFlNzrAKpwhIhv+cc/Q3\nNt3osjWluK2nG0Qv3/1tMncg1avmesUh7eg9LUPFSl7UZwwCTEJxQWOjdFOuSDC3\nl7xdy2sLBwKBgQC8WAOJbwnUcNlaqfhpdWgOqFTRsyF0W/y0ZY5MUMaplz/UtdmS\n3f3MuhFsdXi4de2ZJ8wsSTmpUgHPKyP0bWjtD5LuG4fZ/DajimMj03wGS/fHrGAZ\nF1lz03Xpx7aMyvZ86eXlvzIMZ6ZA+5cCCjc7k5ftCntK+Yhwb8U4jdarEQKBgFi2\nrmje2pt4Mwkg3yMUR24AFajF+pQnQzbS+6/rXh5n+1qKnmqomw6wXFN9zv0Fxur5\nGRiuy6KGM/6VIotEXoss4a/iC4xlotNsAs9BAdw3Cmh8VSC69rDqiFK//Dy4MJiU\nxyhNkkOka8OVSkWM2wpTFcGttzFsq/RBsCSB7ddjAoGBAIjf1pvrxK02JW1F1jFY\naCVlqmLBhMmZsIOIAH68HUZ6aNOhLjeO9+qSAhOHhN9USd5PUYHWnZjziJcvLzzh\nagz55Uot760vXvYo3lW+Rif4K0VxbtxMpd4Vq7q0uI3mtO93MOVMawNRMZOuGv19\nGjw2jVlW88EUDHJOlRYpJSUi\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://sentdb-cc163.firebaseio.com'
  });

//function callmapi() {
    notifier(imap1)
    .on('mail', mail => {
        console.log('from : ' + mail.from[0].address);
        console.log('subject : ' + mail.subject);
        //console.log(mail);
        crtjiratkt(mail.text, function(key){
        getsent(mail.text, function(score){ 
            console.log(mail.text + " = " + score)
            admin.database().ref('scores/').push({
                channel: 'email',
                cname: mail.from[0].name,
                cscore: score,
                ctext: mail.text,
                cmail: mail.from[0].address,
                tdesc: mail.subject,
                ticket: key
              }, function(error) {
                  console.log(error);
              });
        })
      })
    })
    .on('error', err => {
        console.log(err);
    })
    .on('end', () => n.start())
    .start();

/* const n = notifier(imap1);
n.on('end', () => n.start()) */ // session closed
//}

//setInterval(callmapi, 100000);

function getsent (tline, callback) {
    let options1 = { method: 'POST',
    url: 'https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=AIzaSyCh-H9fxZXaR43dQQgg4FIwLWpAX2L5C7E',
    headers:
        {   'cache-control': 'no-cache',
            'content-type': 'application/json' },
    body:
        {
          'document':{
          'type':'PLAIN_TEXT',
          'content': tline
        }
      },
    json: true };

    request(options1, function (error, response, body) {
    //console.log(response);
    if (body.error != 'undefined') {
      callback(body.documentSentiment.score);
    } else {
      callback(0);
    }


  });
}

function crtjiratkt(tline, callback) {
  var options = { method: 'POST',
  url: 'https://atmecs.atlassian.net/rest/api/2/issue/',
  headers: 
   { 'Postman-Token': 'a4536d1b-ff9c-4de7-a9c7-6a30417f61a2',
     'Cache-Control': 'no-cache',
     Authorization: 'Basic Z3VydXByYXNhZC5yYW9AYXRtZWNzLmNvbTpBdG1lY3NAMTIz',
     'Content-Type': 'application/json' },
  body: 
   { fields: 
      { project: { key: 'RPA' },
        summary: tline,
        description: 'Instance Name : DevInstanceforTesting\nImages              : Cirros\nFlavor               : m1.small\nRequester         : guruprasad.rao@atmecs.com',
        issuetype: { name: 'Task', Assignee: 'BOT' } } },
  json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    if (body.error != 'undefined') {
      callback(body.key);
      console.log(body);
    } else {
      callback(0);
    }
  });  
}


