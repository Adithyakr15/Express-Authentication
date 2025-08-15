import express from 'express';
import authRoutes from '../routes/auth.routes.js';
import dbConnect from "../db/index.js"

const app=express();
dbConnect()
app.use("/api/v1/auth",authRoutes)
app.use(express.json());

export default app;