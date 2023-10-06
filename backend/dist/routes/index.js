"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleError_1 = require("./../middlewares/handleError");
const auth_1 = __importDefault(require("./auth"));
const initRoutes = (app) => {
    const v1 = "/api/v1";
    app.use(`${v1}/auth`, (0, auth_1.default)());
    return app.use(handleError_1.notFound);
};
exports.default = initRoutes;
//# sourceMappingURL=index.js.map