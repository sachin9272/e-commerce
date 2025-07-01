import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subcategory: String,
  price: Number,
  imageUrl: String,
  stock: Number
});

export default mongoose.model('Product', productSchema);
