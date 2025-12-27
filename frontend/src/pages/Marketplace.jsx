import { useEffect, useState } from "react";
import PublicLayout from "../components/PublicLayout";
import API from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
  const [crops, setCrops] = useState([]);
  const { addToCart } = useCart();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/marketplace").then(res => setCrops(res.data));
  }, []);

  const handleAdd = (crop) => {
    if (!token) {
      navigate("/login");
      return;
    }
    addToCart(crop);
  };

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Marketplace</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {crops.map(crop => (
            <div key={crop._id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={crop.image}
                className="h-40 w-full object-cover rounded-lg"
              />
              <h3 className="font-semibold mt-2">{crop.name}</h3>
              <p className="text-gray-600">₹{crop.price} / kg</p>

              <button
                onClick={() => handleAdd(crop)}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
