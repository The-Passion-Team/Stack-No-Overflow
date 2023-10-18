import dotenv from "dotenv"
import _ from "lodash"

dotenv.config()

interface ApplicationConfig {
    serverPort: number
    jwtSecret: string
    jwtAccess: string
    jwtRefresh: string
    clientUrl: string
}

const config: ApplicationConfig = {
    serverPort: _.toNumber(process.env.PORT) || 5000,
    jwtSecret: process.env.JWT_SECRET || "AD68CE234E42824853F86A13D3B4B",
    jwtAccess: process.env.JWT_ACCESS_KEY || "3C6FB6477A31CCC45B1BFCB489322",
    jwtRefresh: process.env.JWT_REFRESH_KEY || "E7A7DAA5CEE6F1BC5E4DD14985149",
    clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
}

export default config
