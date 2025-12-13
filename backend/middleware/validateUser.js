export const validateUser = (req, res, next) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            error: "name, email, and phone are required"
        });
    }

    next();
};
