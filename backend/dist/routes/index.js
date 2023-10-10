"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const auth_1 = __importDefault(require("./auth"));
const posts_1 = __importDefault(require("./posts"));
const initRoutes = (app) => {
    const v1 = "/api/v1";
    app.use(`${v1}/auth`, (0, auth_1.default)());
    app.use(`${v1}/post`, (0, posts_1.default)());
    return app.use(middlewares_1.HandleError.notFound);
};
exports.default = initRoutes;
//# sourceMappingURL=index.js.map