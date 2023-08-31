"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
function authRouter() {
    const router = (0, express_1.Router)();
    router.get("/login", (req, res) => {
        res.send("this is login route");
    });
    router.get("/signup", (req, res) => {
        res.send("this is signup route");
    });
    return router;
}
exports.authRouter = authRouter;
//# sourceMappingURL=auth.js.map