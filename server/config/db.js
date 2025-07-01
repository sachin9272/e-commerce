import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL)    
    console.log(`Connected to Database💽`);
    
  }catch(error){
    console.log(`MONGO Connect Error`);
  }
}

export default connectDB;