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

            var res = mail.text.split("\n");
            console.log(res.length)
            var data = []
            for (var i = 1; i < res.length; i++) {

                var a = res[i - 1].split(' ');

                data.push(a[1])
            }

            fs.writeFile("./temp/temp", data, 'utf8', function (err) {

                if (err) {
                    return console.log(err);
                }
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




        });

    })
    .start();