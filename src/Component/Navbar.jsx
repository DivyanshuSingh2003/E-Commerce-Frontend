import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  User,
  ShoppingCart,
  Gift,
  Store,
  Laptop,
  Tv,
  BadgePercent,
  Heart,
  Package,
  Settings,
  Map,
  Headphones,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/mainlogo.jpeg";
import { useCart } from "../context/CartContext"; // ✅ useCart imported

const menuData = {
  "Exclusive At Croma": [],
  "Top Brands": [],
  "Croma Store Locator": [],
  "Gift Card": [],
  "Shop by Category": {
    "Televisions & Accessories": ["Smart TVs", "LED TVs", "TV Accessories"],
    "Home Appliances": [
      "Washing Machines & Dryers",
      "Air Conditioners",
      "Refrigerators & Freezers",
      "Air Treatment Devices",
      "Vacuum Cleaners",
    ],
    "Phones & Wearables": ["Smartphones", "Smartwatches", "Accessories"],
    "Computers & Tablets": ["Laptops", "Desktops", "Tablets", "Monitors"],
    "Kitchen Appliances": ["Microwave Ovens", "Mixers", "Coffee Makers"],
    "Audio & Video": ["Speakers", "Headphones", "Soundbars"],
  },
};

const menuIcons = {
  "Exclusive At Croma": <BadgePercent className="w-4 h-4" />,
  "Top Brands": <Laptop className="w-4 h-4" />,
  "Croma Store Locator": <Store className="w-4 h-4" />,
  "Gift Card": <Gift className="w-4 h-4" />,
  "Shop by Category": <Tv className="w-4 h-4" />,
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [profileHover, setProfileHover] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart(); // ✅ get cart items from global context

  return (
    <nav className="w-full bg-white text-black shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left - Logo + Menu */}
        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
          
        </div>

        {/* Middle - Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-2 rounded-md bg-white text-black text-sm"
          />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-5">
          {/* Location Button */}
          <button
            className="flex items-center gap-1 p-2 hover:bg-gray-200 rounded transition"
            onClick={() => setShowLocationModal(true)}
          >
            <MapPin className="w-7 h-7 text-black" />
            <span className="text-sm hidden sm:inline text-black-300">
              Mumbai, 400049
            </span>
          </button>

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProfileHover(true)}
            onMouseLeave={() => setProfileHover(false)}
          >
            <button className="p-2 hover:bg-gray-200 rounded transition">
              <User className="w-7 h-7 text-black" />
            </button>

            {profileHover && (
              <div className="absolute right-0 mt-3 w-72 bg-[#111] border-r-4 border-teal-500 rounded-lg shadow-lg p-4 transition-all duration-300">
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: <User />, title: "My Profile", desc: "Edit your basic details" },
                    { icon: <Map />, title: "My Address", desc: "Manage your saved addresses" },
                    { icon: <Package />, title: "My Orders", desc: "View, track and reorder easily" },
                    { icon: <BadgePercent />, title: "My Privilege Offers", desc: "Exclusive offers for you" },
                    { icon: <Heart />, title: "My Wishlist", desc: "View your favourite items" },
                    { icon: <Settings />, title: "My Devices & Plans", desc: "Manage devices and plans" },
                    { icon: <Headphones />, title: "My Service Requests", desc: "Manage complaints and feedback" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 hover:bg-gray-800 p-2 rounded-md cursor-pointer transition"
                    >
                      <div className="text-teal-400 mt-0.5">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-black">{item.title}</p>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button
            className="relative p-2 hover:bg-gray-200 rounded transition"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="w-7 h-7 text-black" />
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 transition"
          >
            <Menu className="w-6 h-6" />
            <span className="hidden sm:inline text-sm font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* Sidebar (Menu Drawer) */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          />
          <div className="fixed top-0 left-0 w-72 h-full bg-[#111] text-white z-50 shadow-lg flex flex-col transition-transform duration-300">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-200 hover:text-white" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {Object.keys(menuData).map((category) => (
                <div
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center justify-between py-3 px-4 cursor-pointer hover:bg-gray-500 ${
                    activeCategory === category ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {menuIcons[category]}
                    <span>{category}</span>
                  </div>
                  {menuData[category] &&
                    Object.keys(menuData[category]).length > 0 && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 🌍 Location Modal */}
      <AnimatePresence>
        {showLocationModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLocationModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="bg-[#111] text-black p-8 rounded-lg w-[90%] max-w-md shadow-2xl relative">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                  onClick={() => setShowLocationModal(false)}
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-center text-xl font-semibold mb-2">
                  SELECT YOUR LOCATION
                </h2>
                <p className="text-center text-gray-400 text-sm mb-6">
                  To check products & delivery options available at your location
                </p>

                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode"
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-sm mb-4 focus:outline-none focus:border-teal-500"
                />

                <button className="w-full border border-gray-500 rounded-md px-4 py-3 flex items-center justify-center gap-2 text-gray-300 mb-4 hover:bg-gray-800 transition">
                  <MapPin className="w-4 h-4" />
                  Get Current Location
                </button>

                <div className="text-center text-gray-400 text-xs mb-4">OR</div>

                <button className="w-full border border-gray-500 rounded-md px-4 py-3 text-gray-200 mb-4 hover:bg-gray-800 transition">
                  Sign in to select address
                </button>

                <button className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-md py-3 transition">
                  Continue
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
