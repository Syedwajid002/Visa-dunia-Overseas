import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // You can change this to your email service
    auth: {
      user: process.env.EMAIL_USER || 'demo@visaduniaoverseas.com',
      pass: process.env.EMAIL_PASS || 'demo_password'
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, destinationCountry, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !destinationCountry || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    // Email to admin
    const adminEmailOptions = {
      from: process.env.EMAIL_USER || 'demo@visaduniaoverseas.com',
      to: process.env.ADMIN_EMAIL || 'admin@visaduniaoverseas.com',
      subject: `New Contact Form Submission - ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Destination Country:</strong> ${destinationCountry}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This email was sent from the Visa Dunia Overseas contact form.</em></p>
      `
    };

    // Acknowledgment email to student
    const studentEmailOptions = {
      from: process.env.EMAIL_USER || 'demo@visaduniaoverseas.com',
      to: email,
      subject: 'Thank You for Contacting Visa Dunia Overseas',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank You for Your Interest!</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for reaching out to Visa Dunia Overseas. We have received your inquiry about studying in <strong>${destinationCountry}</strong>.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Submission Details:</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Interested Country:</strong> ${destinationCountry}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>Our expert counselors will review your information and get back to you within <strong>24 hours</strong> with personalized guidance for your study abroad journey.</p>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Explore our study destinations and services on our website</li>
            <li>Follow us on social media for the latest updates</li>
            <li>Call us directly at +91 99632 05226 for immediate assistance</li>
          </ul>
          
          <div style="background-color: #f97316; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-weight: bold;">Free Consultation Available!</p>
            <p style="margin: 5px 0 0 0;">Book your free consultation session with our experts</p>
          </div>
          
          <p>Thank you for choosing Visa Dunia Overseas!</p>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p><strong>Visa Dunia Overseas</strong></p>
            <p>123 Education Plaza, Study Street, Education City</p>
            <p>Phone: +91 99632 05226 | Email: info@visaduniaoverseas.com</p>
            <p>Website: www.visaduniaoverseas.com</p>
          </div>
        </div>
      `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(studentEmailOptions)
    ]);

    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});