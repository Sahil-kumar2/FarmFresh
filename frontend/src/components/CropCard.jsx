export default function CropCard({ crop, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
      <img
        src={crop.image}
        alt={crop.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <div className="mt-3">
        <h3 className="font-semibold text-lg">{crop.name}</h3>
        <p className="text-gray-600">₹{crop.price} / kg</p>

        <button
          onClick={() => onAdd(crop)}
          className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
