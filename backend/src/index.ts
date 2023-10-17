import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import { ApplicationConfig } from "./interfaces"
import initRoutes from "./routes"

const app = express()
dotenv.config()

export const config: ApplicationConfig = {
    serverPort: _.toNumber(process.env.PORT) || 5000,
    jwtSecret: process.env.JWT_SECRET || "AD68CE234E42824853F86A13D3B4B",
    jwtAccess: process.env.JWT_ACCESS_KEY || "3C6FB6477A31CCC45B1BFCB489322",
    jwtRefresh: process.env.JWT_REFRESH_KEY || "E7A7DAA5CEE6F1BC5E4DD14985149",
    clientUrl: process.env.CLIENT_URL || "http://localhost:3000"
}

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
