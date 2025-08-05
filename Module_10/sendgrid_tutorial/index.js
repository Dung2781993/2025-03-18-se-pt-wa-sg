import express from "express";
import sgMail from "@sendgrid/mail";
import "dotenv/config";

const app = express();
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// List of recipients
const recipients = [
  { email: "s4123517@rmit.edu.vn", name: "Tuan" },
];

// Function to send batch emails
async function sendBatchEmails() {
  console.log("Sending batch emails...");
  for (const recipient of recipients) {
    const msg = {
      to: recipient.email,
      from: process.env.FROM_EMAIL,
      templateId: process.env.WELCOME_TEMPLATE_ID,
      dynamicTemplateData: {
        name: recipient.name,
        email: recipient.email,
      },
    };

    try {
      await sgMail.send(msg);
      console.log(`Sent email to ${recipient.email}`);
    } catch (error) {
      console.error(`Error sending to ${recipient.email}`, error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}


app.post("/send-batch", async (req, res) => {
  try {
    await sendBatchEmails();
    res.json({ success: true, message: "Batch emails sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Email scheduler started — will run every 1 minutes");
});
