import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export function sendEmail() {
  console.log(process.env.EMAIL);

  transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'TG BOT',
    text: 'hello world',
    html: `<div style="background:yellow">LMFAO</div>`,
  });
}
