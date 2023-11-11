import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import initRouter from "./routes"
import config from "./config"

const app = express()
dotenv.config()

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cookieParser())
app.use(
    cors({
        origin: [config.clientHost],
    }),
)

initRouter(app)

app.listen(config.port, () => {
    console.log(`Environment ${config.name}`)
    console.log(`Server is running on ${config.serverHost}`)
    connectDB()
})
