import mongoose from 'mongoose';

const referralSchema = new mongoose.Schema({
  referrerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  referredId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: Number,
  earnedAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Referral', referralSchema);
