import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CommonPageController from "../../common/CommonPageController";
import WhatsHot from "../../common/WhatsHot";
import "../../css/style.css";

// ✅ Images
import slide1Img from "../../assets/images/iphone16.png";
import slide2Img from "../../assets/images/iphone17.png";
import slide3Img from "../../assets/images/phones.png";

import phoneAImg from "../../assets/images/iphone1.jpg";
import phoneBImg from "../../assets/images/samsung-promo1.jpg";
import phoneCImg from "../../assets/images/OnePlus.jpeg";
import phoneDImg from "../../assets/images/iphone1.jpg";

import jblPromo from "../../assets/images/popular.webp";
import samsungPromo from "../../assets/images/samsung-promo.jpg";
import sonyPromo from "../../assets/images/popular2.webp";

import iphone16Img from "../../assets/images/iphone16.png";
import iphone15Img from "../../assets/images/iphone15.png";
import iphone14Img from "../../assets/images/iphone14.png";
import iphone13Img from "../../assets/images/iphone13.png";

import technobg from "../../assets/images/tecnobg.webp";
import realmebg from "../../assets/images/realmebg.webp";
import mibg from "../../assets/images/mibg.webp";
import oppobg from "../../assets/images/oppobg.webp";
import nothingbg from "../../assets/images/nothingbg.webp";
import applebg from "../../assets/images/applebg.webp";
import vivobg from "../../assets/images/vivo bg.webp";
import oneplusbg from "../../assets/images/oneplusbg.webp";

import { useCart } from "../../context/CartContext";

const MobilesPagePro = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Use global cart context

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Hero Slides
  const heroSlides = [
    {
      id: 1,
      title: "Mobiles & Smartphones",
      desc: "Explore the widest range of mobile phones across top brands. Discover latest features, exciting deals & offers.",
      img: slide1Img,
      bg: "from-purple-700 to-indigo-700",
    },
    {
      id: 2,
      title: "Latest 5G Phones",
      desc: "Get blazing fast 5G smartphones with cutting-edge performance and stunning design.",
      img: slide2Img,
      bg: "from-purple-700 to-indigo-700",
    },
    {
      id: 3,
      title: "Budget Smartphones",
      desc: "Best performance under budget. Shop affordable mobiles with premium features.",
      img: slide3Img,
      bg: "from-purple-700 to-indigo-700",
    },
  ];

  // ✅ Promo Items
  const promoItems = [
    { title: "JBL Partybox", image: jblPromo },
    { title: "Samsung Galaxy S25 FE", image: samsungPromo },
    { title: "Sony Bravia Festive Sale", image: sonyPromo },
  ];

  // ✅ Bestsellers
  const bestsellers = [
    { id: 1, name: "iPhone 16 Pro", img: phoneAImg, price: "₹1,39,100", rating: 4.9 },
    { id: 2, name: "Samsung Galaxy S24 Ultra", img: phoneBImg, price: "₹1,29,999", rating: 4.8 },
    { id: 3, name: "OnePlus 12R", img: phoneCImg, price: "₹45,999", rating: 4.6 },
    { id: 4, name: "Google Pixel 8", img: phoneDImg, price: "₹82,999", rating: 4.7 },
  ];

  // ✅ Product Cards
  // ✅ Product Cards
  const productCards = [
    { id: 1, name: "iPhone 16", price: "Starting at ₹74,900*", subText: "*Inclusive of all Offers", img: iphone16Img },
    { id: 2, name: "iPhone 15", price: "Starting at ₹62,190*", subText: "*Inclusive of all Offers", img: iphone15Img },
    { id: 3, name: "iPhone 14", price: "Starting at ₹49,990*", subText: "*Inclusive of all Offers", img: iphone14Img },
    { id: 4, name: "iPhone 13", price: "Starting at ₹45,090*", subText: "*Inclusive of all Offers", img: iphone13Img },
  ];
  // ✅ Smartphone Brands
  const brands = [
    { id: 1, name: "Techno", img: technobg },
    { id: 2, name: "Realme", img: realmebg },
    { id: 3, name: "Mi", img: mibg },
    { id: 4, name: "Oppo", img: oppobg },
    { id: 5, name: "Nothing", img: nothingbg },
    { id: 6, name: "Apple", img: applebg },
    { id: 7, name: "Vivo", img: vivobg },
    { id: 8, name: "OnePlus", img: oneplusbg },
  ];

  // ✅ Add to Cart Handler
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowLocationModal(true);
  };

  // ✅ Proceed from Modal
  const handleProceedToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // ✅ Add item via context
      setShowLocationModal(false);
      navigate("/cart");
    }
  };

  return (
    <>
      {/* Hero + Products Section */}
      <CommonPageController
        heroSlides={heroSlides}
        show3D={true}
        modelPath="/models/iphone16.glb"
        modelTitle="Discover the Power of iPhone 16"
        modelDesc="Experience the future of mobile technology with the all-new iPhone 16 — featuring a sleek design, breakthrough performance, and innovations that redefine what a smartphone can do."
        products={bestsellers.map((product) => ({
          ...product,
          handleAddToCart: () => handleAddToCart(product),
        }))}
        productCards={productCards.map((product) => ({
          ...product,
          handleAddToCart: () => handleAddToCart(product),
        }))}
        productHeading="Showing Mobiles"
      />

      {/* What's Hot Section */}
      <WhatsHot items={[]} dealsItems={[]} banners={[]} promoItems={promoItems} />

      {/* Smartphone Brands Swiper */}
      <section className="smartphone-brands-section">
        <div className="container">
          <h2 className="bank-offers-title">Pick Your Smartphone Brand</h2>

          <div className="swiper-outer-wrapper">
            <div ref={prevRef} className="custom-prev">❮</div>
            <div ref={nextRef} className="custom-next">❯</div>

            <Swiper
              modules={[Navigation]}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                swiper.update();
              }}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="brand-swiper"
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="brand-card">
                    <img src={brand.img} alt={brand.name} className="brand-image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Location + Product Modal */}
      <AnimatePresence>
        {showLocationModal && selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLocationModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="bg-[#111] text-white rounded-2xl shadow-2xl w-[95%] max-w-3xl p-8 relative border border-gray-800">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                  onClick={() => setShowLocationModal(false)}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <h2 className="text-xl font-semibold mb-6 text-center tracking-wide">
                  ✅ 1 item added to your cart
                </h2>

                {/* Product Info */}
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-28 h-28 object-contain rounded-xl bg-[#1a1a1a] p-2"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {selectedProduct.price}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Sold by: United Mobiles
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-6" />

                {/* Recommendation Section */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    You might also like
                  </h4>
                  <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
                    <div className="min-w-[90px] text-center bg-[#1b1b1b] p-2 rounded-lg">
                      <img
                        src={iphone15Img}
                        alt="Accessory"
                        className="w-16 h-16 mx-auto object-contain mb-1"
                      />
                      <p className="text-xs text-gray-400">iPhone Case</p>
                    </div>
                    <div className="min-w-[90px] text-center bg-[#1b1b1b] p-2 rounded-lg">
                      <img
                        src={jblPromo}
                        alt="Accessory"
                        className="w-16 h-16 mx-auto object-contain mb-1"
                      />
                      <p className="text-xs text-gray-400">JBL Earbuds</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleProceedToCart}
                    className="w-full sm:w-1/2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md py-3 transition"
                  >
                    Proceed to Cart
                  </button>
                  <button
                    onClick={() => setShowLocationModal(false)}
                    className="w-full sm:w-1/2 border border-gray-600 text-gray-300 rounded-md py-3 hover:bg-[#1b1b1b] transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilesPagePro;
