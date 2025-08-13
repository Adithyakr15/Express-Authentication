import { register, login } from "../controller/auth.controller.js";
import express from "express";

let router = express.Router(); //router instance

//register
router.post("/register", register);

//login
router.post("/login", login);

export default router;
