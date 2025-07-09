export const resetPasswordTemplate = ({resetLink}) =>{
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f7;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .header {
      background-color: #4F46E5;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
    }

    .content {
      padding: 30px;
      color: #333333;
      line-height: 1.6;
    }

    .content h2 {
      color: #4F46E5;
    }

    .button {
      display: inline-block;
      margin: 20px 0;
      padding: 12px 20px;
      background-color: #4F46E5;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .footer {
      background-color: #f0f0f0;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #888888;
    }

    @media (max-width: 600px) {
      .container {
        margin: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>We received a request to reset your password. Click the button below to set a new one:</p>

      <p style="text-align:center;">
        <a href="${resetLink}" class="button">Reset Password</a>
      </p>

      <p>If you didn’t request a password reset, you can safely ignore this email.</p>

      <p>This link will expire in 15 minutes for your security.</p>

      <p>Thank you,<br>The Support Team</p>
    </div>
    <div class="footer">
      &copy; 2025 YourAppName. All rights reserved.
    </div>
  </div>
</body>
</html>
    `
}