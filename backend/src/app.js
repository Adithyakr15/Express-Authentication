import express from 'express';
import router from '../routes/auth.routes.js';
import dbConnect from "../db/index.js"

const app=express();
dbConnect()
app.use("/api/v1/auth",router)

export default app;