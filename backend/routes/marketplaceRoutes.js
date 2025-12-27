import express from "express";
import { getAllCrops } from "../controllers/marketplaceController.js";

const router = express.Router();

router.get("/", getAllCrops);

export default router;
