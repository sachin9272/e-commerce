import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  walletBalance: { type: Number, default: 0 },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  referralCode: String,
  levelPercentages: [Number], // Optional: percentage of earning per level
  createdAt: { type: Date, default: Date.now },
  passwordResetToken:{type: String},
  passwordResetExpiry:{type: Date}
});

export default mongoose.model('User', userSchema);
