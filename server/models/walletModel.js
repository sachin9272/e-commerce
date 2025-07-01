import mongoose from 'mongoose';

const walletTransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  type: { type: String, enum: ['credit', 'debit'] },
  source: { type: String, enum: ['purchase', 'referral', 'withdrawal', 'manual'] },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('WalletTransaction', walletTransactionSchema);
