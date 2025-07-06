import { Router } from "express";
import authToken from "../middlewares/authToken.js";
import { sendOTP } from "../controllers/users/authController.js";
const router = Router();


router.route('/register').post(sendOTP);
// router.route('/login').post(Login);

export default router;