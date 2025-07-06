import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: String
    },
    otpExpiry:{
        type: Date
    }
});

const otpModel = new mongoose.model('OtPVerify', otpSchema);

export default otpModel;