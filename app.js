const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    const output = `
    <p>You Have a new contact request</p>
    <h3>Contact Details </h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message}</li>
    </ul>
    `;
    // nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'send.one.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'moosa.arc@email.com', // generated ethereal user
                pass: 'Moosa$1993' // generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"GMail Nodemailer Contact" <moosakhan92@gmail.com>', // sender address
            to: 'mkuk92@gmail.com', // list of receivers
            subject: 'Node Contact Request', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            res.render('contact', {msg:'Email Has been sent'});

        });
    });
// });

app.listen(3000, () => console.log('server started...'));
