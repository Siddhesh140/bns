import helmet from "helmet";
import { errorHandler } from "./middleware/errorHandler.js";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import paymentRoutes from "./routes/payment.routes.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per IP
    message: "Too many requests. Please try again later."
});

// middleware
app.use(helmet());

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// connect db
const connectDB = async () => {
    try {
        console.log("Using MONGO_URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("🟢 MongoDB connected");
    } catch (err) {
        console.error("🔴 MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

connectDB();
app.use(limiter);

// routes
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);


app.get("/", (req, res) => {
    res.send("Backend running 🚀 (ESM mode)");
});

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

import jwt from "jsonwebtoken";

app.get("/api/test-token", (req, res) => {
    const token = jwt.sign({ id: "test-user" }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });

    res.json({ token });
});

