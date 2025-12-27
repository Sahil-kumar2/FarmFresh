import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">🌱 FarmFresh</h1>

        <div className="space-x-4">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/marketplace" className="hover:text-green-600">Marketplace</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/how-it-works" className="hover:text-green-600">How it Works</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>

          <Link to="/login" className="text-gray-700 hover:text-green-600">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
