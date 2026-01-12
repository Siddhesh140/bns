import { protect } from "../middleware/auth.js";
import express from "express";
import {
    addUser,
    getUsers,
    deleteUser,
    updateUser
} from "../controllers/user.controller.js";

import { validateUser } from "../middleware/validateUser.js";

const router = express.Router();

// CREATE
router.post("/add", validateUser, addUser);

// READ
router.get("/", protect, getUsers);

// UPDATE
router.put("/:id", validateUser, updateUser);

// DELETE
router.delete("/:id", protect, deleteUser);

export default router;
