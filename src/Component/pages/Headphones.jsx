
import React, { useRef } from "react";
import CommonPageController from "../../common/CommonPageController";
import WhatsHot from "../../common/WhatsHot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../css/style.css";

// 🎧 Image Imports
import slide1Img from "../../assets/images/headphone-banner1.webp";
import slide2Img from "../../assets/images/boat-headphone.png";
import slide3Img from "../../assets/images/jbl-headphone.png";

import sonyImg from "../../assets/images/sony-headphone.png";
import jblImg from "../../assets/images/jbl-headphone.png";
import boatImg from "../../assets/images/boat-headphone.png";
import skullcandyImg from "../../assets/images/skullcandy-headphon.png";

import airpodsImg from "../../assets/images/airpods.webp";
import sonyWHImg from "../../assets/images/jbl-headphone.png";
import jblTourImg from "../../assets/images/boat-headphone.png";
import boatRockerzImg from "../../assets/images/skullcandy-headphon.png";

// 🔹 Brand Logos
import sonybg from "../../assets/images/sonybg1.webp";
import boatbg from "../../assets/images/boatbg.webp";
import jblbg from "../../assets/images/jblbg.webp";
import skullcandybg from "../../assets/images/skullcandybg.webp";
import bosebg from "../../assets/images/bosebg1.webp";
import applebg from "../../assets/images/applebg1.webp";
import samsungbg from "../../assets/images/samsungbg.webp";
import zebronicsbg from "../../assets/images/zebronicsbg.webp";

const Headphones = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 🎧 Hero Section Slides
  const heroSlides = [
    {
      id: 1,
      title: "Premium Headphones",
      desc: "Experience deep bass, crystal-clear vocals, and total comfort with our best-selling headphones.",
      img: slide1Img,
      bg: "from-indigo-800 to-blue-700",
    },
    {
      id: 2,
      title: "Wireless Freedom",
      desc: "Cut the cords and enjoy powerful sound with advanced Bluetooth headphones.",
      img: slide2Img,
      bg: "from-indigo-800 to-blue-700",
    },
    {
      id: 3,
      title: "Noise Cancelling Zone",
      desc: "Immerse yourself in silence and sound perfection with active noise cancellation.",
      img: slide3Img,
      bg: "from-indigo-800 to-blue-700",
    },
  ];

  // 🔹 Bestselling Headphones
  const bestsellers = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      img: sonyImg,
      price: "₹29,990",
      rating: 4.9,
    },
    {
      id: 2,
      name: "JBL Tour One M2",
      img: jblImg,
      price: "₹24,999",
      rating: 4.7,
    },
    {
      id: 3,
      name: "boAt Rockerz 550",
      img: boatImg,
      price: "₹2,999",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Skullcandy Crusher Evo",
      img: skullcandyImg,
      price: "₹10,999",
      rating: 4.6,
    },
  ];

  // 🔹 Apple At Croma (Compact Product Cards)
  const productCards = [
    {
      id: 1,
      name: "AirPods Pro (2nd Gen)",
      price: "₹24,900",
      subText: "Active Noise Cancellation & Transparency Mode",
      img: airpodsImg,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: "₹29,990",
      subText: "Industry-leading noise cancellation",
      img: sonyWHImg,
    },
    {
      id: 3,
      name: "JBL Tour One M2",
      price: "₹24,999",
      subText: "Adaptive Noise Cancelling Headphones",
      img: jblTourImg,
    },
    {
      id: 4,
      name: "boAt Rockerz 550",
      price: "₹2,999",
      subText: "50 Hours Battery Life | 40mm Drivers",
      img: boatRockerzImg,
    },
  ];

  // 🔹 Brand Swiper Data
  const brands = [
    { id: 1, name: "Sony", img: sonybg },
    { id: 2, name: "JBL", img: jblbg },
    { id: 3, name: "boAt", img: boatbg },
    { id: 4, name: "Skullcandy", img: skullcandybg },
    { id: 5, name: "Bose", img: bosebg },
    { id: 6, name: "Apple", img: applebg },
    { id: 7, name: "Samsung", img: samsungbg },
    { id: 8, name: "Zebronics", img: zebronicsbg },
  ];

  // 🔹 Promo Items for WhatsHot
  const promoItems = [
    {
      title: "Bose QuietComfort Ultra",
      image: bosebg,
    },
    {
      title: "Sony Audio Fest",
      image: sonybg,
    },
    {
      title: "JBL Sound Blast Sale",
      image: slide1Img,
    },
  ];

  return (
    <>
      <CommonPageController
        heroSlides={heroSlides}
        show3D={false} // no 3D model for headphones yet
        products={bestsellers}
        productCards={productCards}
        productHeading="Top Headphones"
      />

      <WhatsHot items={[]} dealsItems={[]} banners={[]} promoItems={promoItems} />

      {/* 🔹 Brand Swiper Section */}
      <section className="smartphone-brands-section">
        <div className="container">
          <h2 className="bank-offers-title">Pick Your Audio Brand</h2>

          <div className="swiper-outer-wrapper">
            <div ref={prevRef} className="custom-prev">
              ❮
            </div>
            <div ref={nextRef} className="custom-next">
              ❯
            </div>

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
    </>
  );
};

export default Headphones;
