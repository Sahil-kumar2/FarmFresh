import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import FarmerDashboard from "./pages/FarmerDashboard";
import CropSense from "./pages/CropSense";
import AddCrop from "./pages/AddCrop";
import MyCrops from "./pages/MyCrops";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected (after login) */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/farmer" element={<FarmerDashboard />} />

        <Route path="/ai" element={<CropSense />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />
        <Route path="/farmer/my-crops" element={<MyCrops />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}
