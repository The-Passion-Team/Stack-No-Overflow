import { Router } from "express";

export function authRouter(): Router { 
    const router = Router();
    router.get("/login", (req, res) => {
        res.send("this is login route");
    });

    router.get("/signup", (req, res) => {
        res.send("this is signup route");
    });
    return router;
}