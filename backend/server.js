import "dotenv/config";
import paymentRoutes from "./routes/payment.routes.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

const app = express();

// middleware
app.use(cors());
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

// routes
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);


app.get("/", (req, res) => {
    res.send("Backend running 🚀 (ESM mode)");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
