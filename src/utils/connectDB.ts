import config from "../config"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri)
        console.log("Connected to MongoDB")
    } catch (err: any) {
        console.error(err)
    }
}

export default connectDB
