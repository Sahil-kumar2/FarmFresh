import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, authorize("buyer"), createOrder);

export default router;
