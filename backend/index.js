const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 7777;

app.use(express.json());

app.post("", async (req, res) => {
     const { senderName, senderEmail, subject, message } = req.body;

     if (!senderEmail || !subject || !message || !senderName) {
          return res.status(400).json({ message: "Name, Email, Subject, and Message are required" });
     }

     const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          service: process.env.SMTP_SERVICE,
          port: process.env.SMTP_PORT,
          auth: {
               user: process.env.EMAIL_ADDRESS,
               pass: process.env.EMAIL_PASSWORD
          }
     });

     const mailOptions = {
          from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
          to: process.env.EMAIL_ADDRESS,
          subject: `New message from ${senderName} - ${subject}`,
          replyTo: senderEmail,
          html: `
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
     };

     try {
          await transporter.sendMail(mailOptions);
          res.status(200).json({ message: "Email sent successfully" });
     } catch (err) {
          res.status(500).json({ message: "Error Occurred", err: err.message });
     }
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});
