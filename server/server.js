import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoute.js'
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

app.use('/api/v1/user', userRoutes)

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})