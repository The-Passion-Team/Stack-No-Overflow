import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

const router = express.Router()

router.get("/", (req, res) => {
    console.log("this is first route")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
