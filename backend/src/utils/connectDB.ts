import config from "../config/appConfig.config"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.NODE_ENV === "production"
                ? config.production.mongoUrl
                : process.env.NODE_ENV === "temp"
                ? config.temp.mongoUrl
                : config.development.mongoUrl,
        )
        console.log("Connected to MongoDB")
    } catch (err: any) {
        console.error(err)
    }
}

export default connectDB
