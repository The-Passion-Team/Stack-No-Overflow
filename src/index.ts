import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import initRoute, { authRouter, mainRouter } from "./routes"
import connectDB from "./utils/connectDB"
import _ from "lodash"
import { ApplicationConfig } from "./interfaces"

const app = express()

export const config: ApplicationConfig = {
    serverPort: _.toNumber(process.env.PORT) || 5000,
    jwtSecret: process.env.JWT_SECRET || "AD68CE234E42824853F86A13D3B4B",
    jwtActive: process.env.JWT_ACCESS_KEY || "3C6FB6477A31CCC45B1BFCB489322",
    jwtRefresh: process.env.JWT_REFRESH_KEY || "E7A7DAA5CEE6F1BC5E4DD14985149",
}

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cookieParser())
app.use(
    cors({
        origin: ["http://localhost:3000"],
    }),
)

// initRoute()

app.use("/auth", authRouter())
app.use(mainRouter())

app.listen(config.serverPort, () => {
    console.log(`Server is running on port ${config.serverPort}`)
    connectDB()
})
