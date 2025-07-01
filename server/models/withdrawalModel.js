import mongoose from 'mongoose';

const withdrawalRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  bankDetails: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('WithdrawalRequest', withdrawalRequestSchema);
