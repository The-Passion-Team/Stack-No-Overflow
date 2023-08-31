"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
const connectDB_1 = __importDefault(require("./utils/connectDB"));
const app = (0, express_1.default)();
dotenv_1.default.config();
//middleware
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"]
}));
app.use((0, cookie_parser_1.default)());
// app.get("/", (req, res) => {
// 	res.send("API Running");
//   });
app.use("/auth", (0, routes_1.authRouter)());
app.use((0, routes_1.mainRouter)());
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (0, connectDB_1.default)();
});
//# sourceMappingURL=index.js.map