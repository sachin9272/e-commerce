export const otpVerificationTemplate = ({name, otp}) =>{
    return`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        padding: 20px;
        color: #333;
      }
      .container {
        max-width: 500px;
        margin: auto;
        background: #fff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
      }
      .header h1 {
        color: #10b981;
        font-size: 24px;
        margin-bottom: 5px;
      }
      .greeting {
        font-size: 16px;
        margin-top: 10px;
        color: #444;
        text-align: left;
      }
      .otp-box {
        background-color: #f0fdfa;
        border: 1px dashed #10b981;
        padding: 15px;
        text-align: center;
        margin: 20px 0;
        font-size: 32px;
        letter-spacing: 5px;
        color: #065f46;
        font-weight: bold;
      }
      .footer {
        font-size: 14px;
        color: #666;
        text-align: center;
        border-top: 1px solid #eee;
        padding-top: 20px;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Email Verification</h1>
      </div>

      <p class="greeting">Hi ${name},</p>
      <p>Please use the OTP below to verify your email address:</p>

      <div class="otp-box">${otp}</div>

      <p style="text-align: center;">This OTP is valid for <strong>5 minutes</strong>.</p>

      <p>If you didn’t request this, you can safely ignore this email.</p>

      <div class="footer">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </div>
  </body>
</html>

    `
}