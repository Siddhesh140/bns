import { verifyPayment } from "../controllers/payment.controller.js";
import { protect } from "../middleware/auth.js";
import express from "express";
import { createPaymentOrder } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-order", protect, createPaymentOrder);

router.post("/verify", protect, verifyPayment);

export default router;
