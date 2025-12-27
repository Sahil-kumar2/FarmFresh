import Crop from "../models/Crop.js";
import cloudinary from "../config/cloudinary.js";

// ADD CROP (Farmer only)
export const addCrop = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);

    const crop = await Crop.create({
      name,
      price,
      quantity,
      image: result.secure_url,
      farmer: req.user.id,
    });

    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET FARMER CROPS
export const getMyCrops = async (req, res) => {
  const crops = await Crop.find({ farmer: req.user.id });
  res.json(crops);
};

// DELETE CROP
export const deleteCrop = async (req, res) => {
  await Crop.findByIdAndDelete(req.params.id);
  res.json({ message: "Crop deleted" });
};
