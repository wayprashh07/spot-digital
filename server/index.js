require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/ping', (req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    const mailHtml = `
      <h2>New contact from Spot Digital Marketing website</h2>
      <p><strong>Name:</strong> ${'${escapeHtml(name)}'}</p>
      <p><strong>Email:</strong> ${'${escapeHtml(email)}'}</p>
      <p><strong>Phone:</strong> ${'${escapeHtml(phone || "N/A")}'}</p>
      <p><strong>Message:</strong><br/>${'${escapeHtml(message).replace(/\n/g, "<br/>")}'}</p>
    `;

    let transporter;
    if (process.env.MAILER === 'ses') {
      const aws = require('aws-sdk');
      aws.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION || 'us-east-1'
      });
      transporter = nodemailer.createTransport({
        SES: new aws.SES({ apiVersion: '2010-12-01' })
      });
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: +(process.env.SMTP_PORT || 465),
        secure: process.env.SMTP_SECURE !== 'false',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    }

    await transporter.sendMail({
      from: `"Spot Digital Website" <${'${process.env.SMTP_USER}'}>`,
      to: process.env.CONTACT_TO || 'spot99digital@gmail.com',
      subject: `Website contact: ${'${escapeHtml(name)}'}`,
      html: mailHtml
    });

    return res.json({ ok: true, message: 'Message sent' });
  } catch (err) {
    console.error('Contact error', err);
    return res.status(500).json({ error: 'Failed to send message', details: err.message });
  }
});

function escapeHtml(unsafe) {
  return (unsafe || '').replace(/[&<>"'`]/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;', '`':'&#096;'
  })[m]);
}

// Serve React build
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
