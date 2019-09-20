let express = require("express"),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

let app = express();

// We need to only do this once at start
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // should be replaced with real sender's account
        user: 'pixel.wax.shop@gmail.com',
        pass: 'linchpinspass123'
    }
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let newDate = new Date(Date.now());
app.post('/send-email', function(req, res) {
    let mailOptions = {
        to: ['pixel.wax.shop@gmail.com', 'irtacreative@gmail.com', 'mvitale@linchpins.com', 'dorota@linchpins.com'],
        subject: `Inquiry ${newDate}`,
        html: `User has sent an inquiry. <br/>Name: ${req.body.name}<br/>Email: ${req.body.email}<br/>Message: ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            //return error to client
            res.writeHead(500);
            res.end();
            return console.error(error);

        }
    });

    // We can just return 200 here so we know request was success
    res.writeHead(200);
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