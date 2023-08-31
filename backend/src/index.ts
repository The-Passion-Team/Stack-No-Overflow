import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import {authRouter, mainRouter} from "./routes";
import connectDB from "./utils/connectDB"

const app = express()
dotenv.config()

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
	cors({
		origin: ["http://localhost:3000"]
	})
);
app.use(cookieParser());


// app.get("/", (req, res) => {
// 	res.send("API Running");
//   });

app.use("/auth", authRouter());
app.use(mainRouter());


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
})
