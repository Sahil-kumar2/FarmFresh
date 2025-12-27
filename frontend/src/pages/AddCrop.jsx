import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import API from "../services/api";

export default function AddCrop() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);

    try {
      await API.post("/crops", formData);
      alert("Crop added successfully 🌾");
      navigate("/farmer/my-crops");
    } catch (err) {
      alert("Failed to add crop");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Add Crop for Sale">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-lg"
      >
        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Crop Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-4"
          type="number"
          placeholder="Price (₹ per kg)"
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-4"
          type="number"
          placeholder="Quantity (kg)"
          required
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="file"
          className="mb-4"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          {loading ? "Uploading..." : "Add Crop"}
        </button>
      </form>
    </Layout>
  );
}
