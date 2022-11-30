require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')
const nodemailer = require("nodemailer")
var hbs = require('nodemailer-express-handlebars');
const cors = require("cors")
const PORT = 8080 || process.env.PORT

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json())



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
})

transporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        partialsDir: path.resolve(`./views`),
        defaultLayout: false
    },
    viewPath: path.resolve('./views'),
    extName: '.hbs'
}));

app.post("/send-mails/", (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
    var mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: receivedData.emails,
        subject: "TPO cell vidyalankar",
        template: 'email',
        context: {
            companyName: receivedData.content.companyName,
            driveDate: receivedData.content.driveDate
        }
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json("error occured", error)
        } else {
            // console.log(info.response);
            res.status(200).json("Email sent successfully", info.response)

        }
    })
    res.json(receivedData)
})

app.get('/send-mails', (req, res) => {
    res.json({
        mail: "yogi",
        pass: "123"
    })
})

app.listen(PORT, (req, res) => {
    console.log(`server listening to port ${PORT}`);
})