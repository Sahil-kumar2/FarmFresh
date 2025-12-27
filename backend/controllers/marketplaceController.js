import Crop from "../models/Crop.js";

// Get all crops (public / buyers)
export const getAllCrops = async (req, res) => {
  const crops = await Crop.find().populate("farmer", "name");
  res.json(crops);
};
