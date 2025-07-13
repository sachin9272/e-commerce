import { Router } from "express";
import authToken from "../middlewares/authToken.js";
import { sendOTP, verifyOTP, forgotPassword } from "../controllers/users/authController.js";
const router = Router();


router.route('/send-otp').post(sendOTP);
router.route('/verify-otp').post(verifyOTP);
router.route('/forgot-password').post(forgotPassword);

export default router;