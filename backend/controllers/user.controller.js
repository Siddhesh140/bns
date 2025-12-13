// backend/controllers/user.controller.js
import User from "../models/user.model.js";

// ADD USER  (POST /api/users/add)
export const addUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const user = await User.create({ name, email, phone });

        res.json({ message: "User added successfully", user });
    } catch (error) {
        console.error("Error in addUser:", error);
        res.status(500).json({ error: error.message });
    }
};

// GET ALL USERS  (GET /api/users)
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ count: users.length, users });
    } catch (error) {
        console.error("Error in getUsers:", error);
        res.status(500).json({ error: error.message });
    }
};

// DELETE USER  (DELETE /api/users/:id)
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE USER  (PUT /api/users/:id)
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, phone },
            { new: true } // returns updated data
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


