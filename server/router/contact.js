const express = require('express')
const mailer  = require('nodemailer')
const mailRouter = express.Router()
const dotenv  = require('dotenv').config()

mailRouter.post('/', (req, res) => {
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GOOGLEAPPPASSWORD
        }
    })

    var options = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: "Contact Request",
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: Contact Request </li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
    }

    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error)
            res.json('Couldnot send Email')
        }
        else {
            res.json('Email Sent Successfully')
        }

    });
})


module.exports = mailRouter;
