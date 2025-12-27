import mongoose from "mongoose";

const cropSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Crop", cropSchema);
