import express from 'express';
import User from '../../models/userModel.js'
import Otp from '../../models/otpVerifyModel.js';
import { sendEmail } from '../../utils/sendEmail.js';
import bcrypt from 'bcrypt';
import { otpVerificationTemplate } from '../../templates/otpVerifyTemplate.js';
import authToken from '../../middlewares/authToken.js';
import { resetPasswordTemplate } from '../../templates/resetPasswordTemplate.js';
export const Login = async (req, res) => {
    const { email, password } = req.body;

}

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const sendOTP = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already Exists", success: false });
    }
    try {
        let otpUser = await Otp.findOne({ email });
        const otp = generateOTP();
        console.log("otp-->", otp);
        const otpExpiry = Date.now() + 3 * 60 * 1000;
        if (!otpUser) {
            otpUser = await Otp.create({
                email,
                otp,
                otpExpiry
            })
        } else {
            otpUser.otp = otp;
            otpUser.otpExpiry = otpExpiry;
            await otpUser.save();
        }
        const subject = "OTP Verification Code"
        const htmlContent = otpVerificationTemplate({ name, otp });
        sendEmail({ email, subject, htmlContent });
        return res.status(200).json({ message: "OTP sent successfully", success: true });
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}

export const verifyOTP = async (req, res) => {
    const { name, email, otp, password } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) return res.status(400).json({ message: "User exists with provided email", success: false });
        const otpRecord = await Otp.findOne({ email });
        if (!otpRecord || otp != otpRecord.otp) {
            return res.status(400).json({ message: "Invalid Otp", success: false });
        }
        if (otpRecord.otpExpiry < new Date()) {
            return res.status(400).json({ message: "Otp Expired", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await Otp.deleteOne({ email });
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        authToken.userSendToken(user, 200, res, "register");
    } catch (error) {
        console.log("Erro:", error.message);
        return res.status()
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });

        user.passwordResetToken = token;
        user.passwordResetExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
        await user.save();

        const resetLink = `${process.env.FRONTEND_URL}${token}`;
        const htmlContent = resetPasswordTemplate({resetLink});
        const subject = "Password Reset Email";
        await sendEmail({email, subject, htmlContent});
        res.status(200).json({ message: 'Reset link sent to your email' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
}