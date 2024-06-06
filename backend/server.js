import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import ngoroutes from "./routes/ngoroutes.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3001;

connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
  methods: "GET, POST, PUT, DELETE",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use("/api/donation", donationRoutes);

app.use("/api/ngo", ngoroutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
