"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
__exportStar(require("./auth"), exports);
__exportStar(require("./main"), exports);
const express_1 = __importDefault(require("express"));
const auth_1 = require("./auth");
const app = (0, express_1.default)();
const initRoute = () => {
    console.log("first");
    const v1 = "/api/v1";
    app.use(`${v1}/auth`, auth_1.authRouter);
    return app.use((req, res, err) => {
        return res.status(http_status_codes_1.default.NOT_FOUND).send({ msg: "Not found" });
    });
};
exports.default = initRoute;
//# sourceMappingURL=index.js.map