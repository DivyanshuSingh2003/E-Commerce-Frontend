import React from "react";
import { FaStar, FaMobileAlt, FaHeart, FaTrash } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Tilt from "react-parallax-tilt";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "swiper/css";
import "swiper/css/pagination";

import appleLogo from "../assets/images/apple-logo.png";

// ✅ Dynamic 3D Model Loader
const ModelViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.6} position={[0, -0.1, 0]} />;
};

// ✅ Common Controller
const CommonPageController = ({
  heroSlides = [],
  show3D = false,
  modelPath = null,
  modelTitle = "",
  modelDesc = "",
  products = [],
  productCards = [],
  productHeading = "Showing Products",
}) => {
  // ✅ Cart State
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  // ✅ Add to Cart Handler
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    setCartOpen(true); // Open cart drawer on add
  };

  // ✅ Remove from Cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // ✅ Total Price
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity,
    0
  );

  return (
    <div className="text-white relative">
      {/* 🔹 Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={() => setCartOpen(false)}>X</button>
        </div>
        <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-80px)]">
          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-16 w-16 object-contain rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">
                    ₹{parseFloat(item.price.replace(/[^0-9.-]+/g, ""))} x{" "}
                    {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-700">
            <p className="font-bold text-lg mb-2">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Hero Slider (if data is passed) */}
      {heroSlides.length > 0 && (
        <section className="relative">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="h-[450px]"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className={`w-full h-full bg-gradient-to-r ${slide.bg} py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8`}
                >
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
                      <FaMobileAlt /> {slide.title}
                    </h1>
                    <p className="mt-4 text-lg max-w-lg">{slide.desc}</p>
                    <button className="mt-6 bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
                      Shop Now
                    </button>
                  </div>
                  <div className="flex-1">
                    <Tilt
                      scale={1.05}
                      transitionSpeed={400}
                      glareEnable
                      glareMaxOpacity={0.2}
                    >
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="rounded-lg object-contain w-[380px] h-[380px] mx-auto"
                      />
                    </Tilt>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* 🔹 3D Viewer Section */}
      {show3D && modelPath && (
        <section className="bg-gray-900 py-16 px-6 md:px-12">
          <div className="flex container flex-col lg:flex-row w-full max-w-7xl mx-auto gap-12 items-center">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {modelTitle} <span className="text-purple-500">3D Model</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-lg leading-relaxed">
                {modelDesc}
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
                Buy Now
              </button>
            </div>
            <div className="flex-1 h-[500px] w-full">
              <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} intensity={1.2} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                />
                <ModelViewer modelPath={modelPath} />
              </Canvas>
            </div>
          </div>
        </section>
      )}

      {/* 🔹 Products Grid */}
      {/* 🔹 Products Grid */}
      {products.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-gray-950">
          <div className="container">
            <h2 className="bank-offers-title text-3xl font-extrabold text-white mb-10 border-l-4 border-purple-500 pl-3">
              {productHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((m) => (
                <div
                  key={m.id}
                  className="relative rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 
            hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 flex flex-col overflow-hidden"
                >
                  <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
                    <FaHeart size={20} />
                  </button>
                  <div className="bg-gray-800 flex items-center justify-center h-56">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-44 object-contain"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col text-white">
                    <h3 className="font-semibold text-lg">{m.name}</h3>
                    <div className="mt-2 text-xl font-bold text-purple-400">
                      {m.price}
                    </div>
                    <div className="mt-2 flex items-center text-yellow-400 text-sm">
                      <FaStar className="mr-1" /> {m.rating.toFixed(1)}
                    </div>
                    {/* ✅ Use the parent handler */}
                    <button
                      onClick={m.handleAddToCart}
                      className="mt-auto w-full bg-purple-600 text-white py-2.5 rounded-lg 
                hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔹 Apple At Croma Section */}
      {productCards.length > 0 && (
        <section className="py-14 px-4 md:px-12 bg-[#111111]">
          <div className="container">
            <h2 className="bank-offers-title text-3xl font-bold text-white mb-8">
              Apple At Croma
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {productCards.map((p) => (
                <div
                  key={p.id}
                  className="bg-gradient-to-b from-gray-200 to-gray-100 rounded-2xl shadow-md
                 flex flex-col justify-between items-center text-center py-4 px-3
                 hover:scale-105 transition-transform duration-300"
                >
                  <img src={appleLogo} alt="Apple Logo" className="h-6 mb-1" />
                  <h3 className="text-lg font-semibold text-black">{p.name}</h3>
                  <p className="text-gray-800 mt-0.5 text-sm font-medium">
                    Starting at{" "}
                    <span className="font-bold text-black">{p.price}</span>
                  </p>
                  <p className="text-xs text-gray-700 mt-0.5">{p.subText}</p>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-40 object-contain mt-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CommonPageController;
