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
router.get("/", getUsers);

// UPDATE
router.put("/:id", validateUser, updateUser);

// DELETE
router.delete("/:id", deleteUser);

export default router;
