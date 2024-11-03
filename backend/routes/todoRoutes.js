import express from 'express';
import { postATodo, getTodo, getATodo, updateATodo, deleteATodo } from "../controllers/todoController.js";
const router = express.Router();

// Create todo
router.post("/todos", postATodo);

// Get all todo's
router.get("/todos", getTodo);

// Get a to do
router.get("/todos/:id", getATodo);

// Update a todo
router.put("/todos/:id", updateATodo);

// Delete a todo
router.delete("/todos/:id", deleteATodo);

export default router;