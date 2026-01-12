import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(2, "Name too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits")
});

export const validateUser = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    } catch (err) {
        return res.status(400).json({
            error: err.errors[0].message
        });
    }
};
