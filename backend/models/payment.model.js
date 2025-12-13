import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            default: "INR",
        },
        status: {
            type: String,
            enum: ["created", "paid", "failed"],
            default: "created",
        },
        razorpayOrderId: String,
        razorpayPaymentId: String,
    },
    { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
