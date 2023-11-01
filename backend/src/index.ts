import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import initRouter from "./routes"
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
        origin: [
            process.env.NODE_ENV === "development"
                ? config.development.clientUrl
                : config.production.clientUrl || "*",
        ],
    }),
)

initRouter(app)

app.listen(
    process.env.NODE_ENV === "production"
        ? config.production.serverPort
        : process.env.NODE_ENV === "temp"
        ? config.temp.serverPort
        : config.development.serverPort,
    () => {
        console.log(
            `Server is running on port ${
                process.env.NODE_ENV === "production"
                    ? config.production.serverPort
                    : process.env.NODE_ENV === "temp"
                    ? config.temp.serverPort
                    : config.development.serverPort
            }`,
        )
        console.log(
            `On ${
                process.env.NODE_ENV === "production"
                    ? config.production.nodeEnv
                    : process.env.NODE_ENV === "temp"
                    ? config.temp.nodeEnv
                    : config.development.nodeEnv
            }`,
        )
        connectDB()
    },
)
