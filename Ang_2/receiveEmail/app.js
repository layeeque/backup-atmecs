var Imap = require('imap'),
  inspect = require('util').inspect;
var fs = require('fs'), fileStream;

var imap = new Imap({
  user: "layeequerehman786@gmail.com",
  password: "alfaiz@22",
  host: "imap.gmail.com",
  port: 993,
  tls: true
});



function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}
imap.once('ready', function () {
  openInbox(function (err, box) {
    if (err) throw err;
    // imap.search([ 'UNSEEN', [‘SINCE’, ‘June 15, 2018’] ], function(err, results) {
    imap.search(['UNSEEN', ['SINCE', 'October 9, 2018']], function (err, results) {
      console.log('@@ results are ' + results)
      if (err) throw err;
      var f = imap.fetch(results, { bodies: '' });
      f.on('message', function (msg, seqno) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';
        msg.on('body', function (stream, info) {
          console.log(prefix + 'Body');
          stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
        });
        msg.once('attributes', function (attrs) {
          console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        // msg.once('end', function () {
        //   console.log(prefix + 'Finished');
        // });
      });
      f.once('error', function (err) {
        console.log('Fetch error: ' + err);
      });
      // f.once('end', function () {
      //   console.log('Done fetching all messages!');
      //     imap.end();
      // });
    });
  });
});

imap.once('error', function (err) {
  console.log(err);
});
// imap.once('end', function() {
// console.log('Connection ended');
// });
imap.connect();





