import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import { authRouter, mainRouter } from "./routes"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import { ApplicationConfig } from "./interfaces"

const app = express()

export const config: ApplicationConfig = {
    serverPort: _.toNumber(process.env.PORT) || 5000,
    jwtSecret: process.env.JWT_SECRET || "AD68CE234E42824853F86A13D3B4B",
}

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(
    cors({
        origin: ["http://localhost:3000"],
    }),
)
app.use(cookieParser())

app.use("/auth", authRouter())
app.use(mainRouter())

app.listen(config.serverPort, () => {
    console.log(`Server is running on port ${config.serverPort}`)
    connectDB()
})
