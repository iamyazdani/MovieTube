import express from "express";
import { 
    addComment,
    deleteComment,
    getComments
} from "../controllers/comment.js";
import {verifyToken} from "../verifyToken.js"

const router = express.Router();

// Create a Comment
router.post("/", verifyToken, addComment)

// Delete comment
router.delete("/:id", verifyToken, deleteComment)

// Get your Comment
router.get("/:videoId", getComments)

export default router;
