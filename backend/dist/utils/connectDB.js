"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig_config_1 = __importDefault(require("../config/appConfig.config"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.NODE_ENV === "production"
            ? appConfig_config_1.default.production.mongoUrl
            : process.env.NODE_ENV === "temp"
                ? appConfig_config_1.default.temp.mongoUrl
                : appConfig_config_1.default.development.mongoUrl);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map