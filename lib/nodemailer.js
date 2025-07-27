import nodemailer from "nodemailer";

const gmailId = process.env.GMAIL_ID;
const gmailPass = process.env.GMAIL_PASS;

const tranport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailId,
    pass: gmailPass,
  },
});

export const sendMail = async (email, otp) => {
  try {
    await tranport.sendMail({
      from: `Headliner ${gmailId}`,
      to: email,
      subject: "Your OTP for Headliner Verification",
      html: `
       <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; color: #333;">
        <h2 style="color: #4a90e2;">Hello from Headliner!</h2>
        <p>We received a request to verify your email address.</p>
        <p>Please use the following One-Time Password (OTP) to proceed:</p>
        <div style="font-size: 24px; font-weight: bold; background: #e0f7fa; color: #00796b; padding: 10px 20px; border-radius: 8px; display: inline-block; margin: 20px 0;">
          ${otp}
        </div>
        <p>This OTP is valid for 10 minutes. Do not share it with anyone.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <br/>
        <p style="font-size: 14px; color: #888;">Thanks,<br/>Team Headliner</p>
      </div>
      `,
    });
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};
