import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  totalAmount: Number,
  status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
  trackingInfo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
