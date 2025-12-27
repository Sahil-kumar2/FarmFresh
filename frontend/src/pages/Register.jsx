import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("Account created successfully ✅");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your FarmFresh account 🌱
        </h2>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* ROLE SELECTION */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Sign up as</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="buyer"
                checked={role === "buyer"}
                onChange={() => setRole("buyer")}
              />
              Buyer
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="farmer"
                checked={role === "farmer"}
                onChange={() => setRole("farmer")}
              />
              Farmer
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
