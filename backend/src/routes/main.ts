import { Router } from "express";

export function mainRouter(): Router { 
    const router = Router();
    router.get("/", (req, res) => {
        res.send("API Running");
    });
    return router;
}