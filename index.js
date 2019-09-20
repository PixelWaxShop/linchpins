/* const sendmail = require('sendmail')();

sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'mirna.miskovic@gmail.com',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
 */
let express = require("express"),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

let app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', function(req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'mirna.miskovic@gmail.com',
            pass: '12step34step'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: ['mirna.miskovic@gmail.com', 'irtacreative@gmail.com'],
        subject: req.body.email,
        text: req.body.message,
        attachments: [{
            // file on disk as an attachment
            filename: req.body.file,
            path: req.body.file.filename // stream this file
        }]
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: 'index.html' });
    res.end();
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

let server = app.listen(port, function() {
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});