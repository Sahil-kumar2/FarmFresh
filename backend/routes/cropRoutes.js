import express from "express";
import { addCrop, getMyCrops, deleteCrop } from "../controllers/cropController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Farmer only
router.post("/", protect, authorize("farmer"), upload.single("image"), addCrop);
router.get("/my", protect, authorize("farmer"), getMyCrops);
router.delete("/:id", protect, authorize("farmer"), deleteCrop);

export default router;
