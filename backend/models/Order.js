import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        crop: { type: mongoose.Schema.Types.ObjectId, ref: "Crop" },
        qty: Number,
      },
    ],
    totalAmount: Number,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
