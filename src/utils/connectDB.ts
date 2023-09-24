import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || "");
      console.log("Connected to MongoDB");
    } catch (err: any) {
      console.error(err);
    }
};


export default connectDB;