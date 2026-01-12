import crypto from "crypto";
import Razorpay from "razorpay";
import Payment from "../models/payment.model.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE PAYMENT ORDER
export const createPaymentOrder = async (req, res) => {
    try {
        const { userId } = req.body;

        const FIXED_PRICE = 4999; // ₹4999 only


        const order = await razorpay.orders.create({
            amount: FIXED_PRICE * 100,
            currency: "INR",
        });

        const payment = await Payment.create({
            userId,
            amount: FIXED_PRICE,
            razorpayOrderId: order.id,
        });


        res.json({
            orderId: order.id,
            amount: FIXED_PRICE,
            key: process.env.RAZORPAY_KEY_ID,
            paymentId: payment._id,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ error: "Payment verification failed" });
        }

        await Payment.findOneAndUpdate(
            { razorpayOrderId: razorpay_order_id },
            {
                razorpayPaymentId: razorpay_payment_id,
                status: "PAID"
            }
        );

        res.json({ success: true, message: "Payment verified successfully" });

    } catch (error) {
        res.status(500).json({ error: "Verification failed" });
    }
};

