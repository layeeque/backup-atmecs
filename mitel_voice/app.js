const express = require('express');
const bodyParser = require('body-parser');
var https = require('https');
var request = require("request");
var http = require("http");
var cors = require('cors')
const admin = require('firebase-admin');
const restService = express();
restService.use(cors())
restService.use(bodyParser.urlencoded({
    extended: true
}));

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: 'sentdb-cc163',
        clientEmail: 'firebase-adminsdk-51wri@sentdb-cc163.iam.gserviceaccount.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCU10UmJVoLytex\nVM0XhE9ttKA2d75usyIm+SxsM85ATq7mDPF3u+AUSNgX/MOKk+A4u+iKwQdxZFJ5\n8noDGvOmdXBlIsQ9yQ5VrZWm5++1GaNT/Gz+ultnUZkYuJIFgd95l8ZEsyNmQ3pP\nltUhMRpaeQnib3hRfJZvotjgWdqRGsYsVUAR61BL53buQ496C8Wk0dg+z9EOnQQe\nIrtENudbbxCPvxt5QHdOGREq5e0HKRzkwEwbS/9NKfmysc1ORAly2SmGyrF2s54N\nftKMng3DCl/2HNEOWA8VDtnm3ngzau6fQRUejZuBgtYRhCZa0aeREue1WhDm4Vz4\nOha70JK1AgMBAAECggEADJFqFRDPW/9agjtTMoEPuFRDUp+yDiS38nGIFwtMbbEX\nL9uRu8oHkr7p6SPRtFuZpQ2QH8AX63+/2FNDJHL73I2+TWC63S3wG26UArfczYtN\nXgcKtXtLKSjCbcxCbEIHFEkRsVuTcCWsTmWOnp+UuZhoRZBv3CjSIFNKAkiKd6xM\n0XqU5ZMwRj/GAGo3mZ2Y8gpSbB/QEDBMHd9AfGWydLkOP7UC+wCRMTtZAYxDTVjE\nNg9trJaZKQnFYE8FbiPOFgH7eSSw2l2RZl8iyQTH4E7J+KaxdzN5pgE1va4UcOa/\nvX2mfGy6SrgJP/NTYlThTD4j1imP7u0TLM0EzWkNewKBgQDI4IDsLhMDE9JSEeCN\nPTtPKHFLMKPgZLmCwlG7AU/uyyVpYGnjop1sldbmMuGyASiOvLsgQGqYwxZvcH+U\n4uSMFXa91eWgXNtv48PM5qLRzlTv/G7O7/q2w2pGUHUjCPqqtnRiJEtfMdaCDrKz\nP5jWasz52BtJLV/+5qkDPuN5YwKBgQC9r0LnpcJ26DnOvROvex9ZBVnRNWO3fF2g\nsAQquK6KRzD0u5iUDsfkojkLJrMCTZ+05erAHSsMoqcqVFlNzrAKpwhIhv+cc/Q3\nNt3osjWluK2nG0Qv3/1tMncg1avmesUh7eg9LUPFSl7UZwwCTEJxQWOjdFOuSDC3\nl7xdy2sLBwKBgQC8WAOJbwnUcNlaqfhpdWgOqFTRsyF0W/y0ZY5MUMaplz/UtdmS\n3f3MuhFsdXi4de2ZJ8wsSTmpUgHPKyP0bWjtD5LuG4fZ/DajimMj03wGS/fHrGAZ\nF1lz03Xpx7aMyvZ86eXlvzIMZ6ZA+5cCCjc7k5ftCntK+Yhwb8U4jdarEQKBgFi2\nrmje2pt4Mwkg3yMUR24AFajF+pQnQzbS+6/rXh5n+1qKnmqomw6wXFN9zv0Fxur5\nGRiuy6KGM/6VIotEXoss4a/iC4xlotNsAs9BAdw3Cmh8VSC69rDqiFK//Dy4MJiU\nxyhNkkOka8OVSkWM2wpTFcGttzFsq/RBsCSB7ddjAoGBAIjf1pvrxK02JW1F1jFY\naCVlqmLBhMmZsIOIAH68HUZ6aNOhLjeO9+qSAhOHhN9USd5PUYHWnZjziJcvLzzh\nagz55Uot760vXvYo3lW+Rif4K0VxbtxMpd4Vq7q0uI3mtO93MOVMawNRMZOuGv19\nGjw2jVlW88EUDHJOlRYpJSUi\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://sentdb-cc163.firebaseio.com'
});

function getsent(tline, callback) {
    let options1 = {
        method: 'POST',
        url: 'https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=AIzaSyCh-H9fxZXaR43dQQgg4FIwLWpAX2L5C7E',
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body:
        {
            'document': {
                'type': 'PLAIN_TEXT',
                'content': tline
            }
        },
        json: true
    };

    request(options1, function (error, response, body) {
        //console.log(response);
        if (body.error != 'undefined') {
            callback(body.documentSentiment.score);
        } else {
            callback(0);
        }
    });
}

restService.use(bodyParser.json());
restService.post('/echo', function (req, res) {
    console.log("i am in rest sevice block");

    if (req.body.result.action == 'DefaultWelcomeIntent.DefaultWelcomeIntent-custom.DefaultWelcomeIntent-custom-yes.DefaultWelcomeIntent-custom-yes-custom.DefaultWelcomeIntent-custom-yes-custom-custom') {
        console.log("entered value is " + req.body.result.resolvedQuery)
     


        getsent(req.body.result.resolvedQuery, function (score) {
            admin.database().ref('scores/').push({
                channel: 'voice',
                cname: 'prakash',
                cscore: score,
                ctext: req.body.result.resolvedQuery,
                cmail: 'test mail',
                tdesc: 'test subject',
                ticket: 'ABC-'+Math.floor(Math.random()*(999-100+1)+100)
            }, function (error) {
                console.log("error * "+error);
              
            });
            console.log(req.body.result.resolvedQuery + ":" + score);
            return res.json({
                speech: " I recorded your statement. Will escalate the issue and work on resolving it!!",
                displayText: " I recorded your statement. Will escalate the issue and work on resolving it!!",
                source: 'webhook-echo-sample',
            })
        })


    }
})

restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening ")

});