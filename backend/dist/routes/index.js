"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const auth_1 = __importDefault(require("./auth"));
const posts_1 = __importDefault(require("./posts"));
const tags_1 = __importDefault(require("./tags"));
const roles_1 = __importDefault(require("./roles"));
const statusAccount_1 = __importDefault(require("./statusAccount"));
const methodLogin_1 = __importDefault(require("./methodLogin"));
const initRoutes = (app) => {
    const v1 = "/api/v1";
    app.use(`${v1}/auth`, (0, auth_1.default)());
    app.use(`${v1}/post`, (0, posts_1.default)());
    app.use(`${v1}/tag`, (0, tags_1.default)());
    app.use(`${v1}/role`, (0, roles_1.default)());
    app.use(`${v1}/statusAccount`, (0, statusAccount_1.default)());
    app.use(`${v1}/methodLogin`, (0, methodLogin_1.default)());
    return app.use(middlewares_1.HandleError.notFound);
};
exports.default = initRoutes;
//# sourceMappingURL=index.js.map