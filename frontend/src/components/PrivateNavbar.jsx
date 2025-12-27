import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import { useCart } from "../context/CartContext";

export default function PrivateNavbar() {
  const navigate = useNavigate();
  const role = getUserRole();
  const { cart } = useCart();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">🌱 FarmFresh</h1>

        <div className="space-x-6 flex items-center">
          <Link to="/marketplace" className="hover:text-green-600">
            Marketplace
          </Link>

          <Link to="/cart" className="relative hover:text-green-600">
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {role === "farmer" && (
            <>
              <Link to="/farmer" className="hover:text-green-600">
                Dashboard
              </Link>
              <Link to="/ai" className="hover:text-green-600">
                CropSense AI
              </Link>
            </>
          )}

          <button
            onClick={logout}
            className="text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
