const notifier = require('mail-notifier');
var Imap = require('imap'),
    inspect = require('util').inspect;
var fs = require('fs'), fileStream;
var cmd = require('node-cmd');

var imap = new Imap({
    user: "layeequerehman786@gmail.com",
    password: "alfaiz@22",
    host: "imap.gmail.com",
    port: 993,
    tls: true
});

var imap1 = {
    user: "layeequerehman786@gmail.com",
    password: "alfaiz@22",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};

notifier(imap1)
    .on('mail', mail => {
        console.log(mail)
    })
    .start();


const n = notifier(imap1);
n.on('end', () => n.start()) // session closed
    .on('mail', mail => {
        console.log("Mail arrived")
        var table = {
            "body": mail.text,
            "subject": mail.subject,
            "sender": mail.from,
            "date": mail.date,
            "message id ": mail.messageId
        };

        var json = JSON.stringify(table);

        fs.writeFile("./attachments/" + mail.subject + '.json', json, 'utf8', function (err) {

          

            cmd.get(
                'node nightwatch -e chrome',
                function (err, data, stderr) {
                    console.log('the current working dir is : ', data)
                }
            );
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

    })
    .start();