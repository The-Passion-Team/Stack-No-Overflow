import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
