"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
function mainRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.send("API Running");
    });
    return router;
}
exports.mainRouter = mainRouter;
//# sourceMappingURL=main.js.map