import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import initRoutes from "./routes"
import config from "./config/appConfig.config"

const app = express()
dotenv.config()

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cookieParser())
app.use(
    cors({
        origin: [process.env.CLIENT_HOST || "http://localhost:3000"],
    }),
)

initRoutes(app)

app.listen(config.serverPort, () => {
    console.log(`Server is running on port ${config.serverPort}`)
    connectDB()
})
