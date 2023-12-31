"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.mongoUri);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map