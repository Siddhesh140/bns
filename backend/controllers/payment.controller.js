import Razorpay from "razorpay";
import Payment from "../models/payment.model.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE PAYMENT ORDER
export const createPaymentOrder = async (req, res) => {
    try {
        const { amount, userId } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100, // rupees → paise
            currency: "INR",
        });

        const payment = await Payment.create({
            userId,
            amount,
            razorpayOrderId: order.id,
        });

        res.json({
            orderId: order.id,
            amount,
            key: process.env.RAZORPAY_KEY_ID,
            paymentId: payment._id,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
