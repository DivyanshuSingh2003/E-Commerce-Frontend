import React, { useRef } from "react";
import CommonPageController from "../../common/CommonPageController";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/style.css";

// 📺 Hero Images
import slide1Img from "../../assets/images/tv-banner1.webp";
import slide2Img from "../../assets/images/tv-banner2.webp";
import slide3Img from "../../assets/images/tv-banner3.webp";

// 📺 Product Images
import samsungTVImg from "../../assets/images/samsung-t.webp";
import lgTVImg from "../../assets/images/lg-tv.webp";
import sonyTVImg from "../../assets/images/mi-tv.webp";
import oneplusTVImg from "../../assets/images/sony-tv.webp";

// 📺 Brand Logos
import samsungbg from "../../assets/images/samsungbg3.webp";
import lgbg from "../../assets/images/lgbg.webp";
import sonybg from "../../assets/images/sonybg3.webp";
import oneplusbg from "../../assets/images/oneplusbg.webp";
import miTVbg from "../../assets/images/mibg3.webp";
import panasonicbg from "../../assets/images/panasonicbg.webp";
import tclbg from "../../assets/images/tclbg.webp";
import vizioBg from "../../assets/images/viziobg.webp";

const TelevisionsPage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 🔹 Hero slider images
  const heroSlides = [slide1Img, slide2Img, slide3Img];

  // 🔹 Bestselling TVs
  const bestsellers = [
    {
      id: 1,
      name: "Samsung QLED 4K",
      img: samsungTVImg,
      price: "₹74,999",
      rating: 4.8,
    },
    {
      id: 2,
      name: "LG OLED 55''",
      img: lgTVImg,
      price: "₹89,990",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Sony Bravia 65''",
      img: sonyTVImg,
      price: "₹1,29,999",
      rating: 4.9,
    },
    {
      id: 4,
      name: "OnePlus TV U1S",
      img: oneplusTVImg,
      price: "₹54,999",
      rating: 4.6,
    },
  ];

  // 🔹 Compact Product Cards
  const productCards = [
    {
      id: 1,
      name: "Samsung QLED 4K",
      price: "₹74,999",
      subText: "Smart & HDR",
      img: samsungTVImg,
    },
    {
      id: 2,
      name: "LG OLED 55''",
      price: "₹89,990",
      subText: "4K UHD & Dolby Vision",
      img: lgTVImg,
    },
    {
      id: 3,
      name: "Sony Bravia 65''",
      price: "₹1,29,999",
      subText: "Cinematic Experience",
      img: sonyTVImg,
    },
    {
      id: 4,
      name: "OnePlus TV U1S",
      price: "₹54,999",
      subText: "Smart Android TV",
      img: oneplusTVImg,
    },
  ];

  // 🔹 Brand Swiper
  const brands = [
    { id: 1, name: "Samsung", img: samsungbg },
    { id: 2, name: "LG", img: lgbg },
    { id: 3, name: "Sony", img: sonybg },
    { id: 4, name: "OnePlus", img: oneplusbg },
    { id: 5, name: "Mi TV", img: miTVbg },
    { id: 6, name: "Panasonic", img: panasonicbg },
    { id: 7, name: "TCL", img: tclbg },
    { id: 8, name: "Vizio", img: vizioBg },
  ];

  return (
    <div className="text-white">
      {/* 🔹 Custom Full-Width Hero Slider */}
      <section className="w-full relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="w-full h-[400px] md:h-[400px]"
        >
          {heroSlides.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-slide-wrapper">
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="hero-slide-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔹 Top Televisions */}
      <CommonPageController
        heroSlides={[]} // No hero from CommonPage
        show3D={false}
        products={bestsellers}
        productCards={productCards}
        productHeading="Top Televisions"
      />

      {/* 🔹 Brand Swiper Section */}
      <section className="smartphone-brands-section">
        <div className="container">
          <h2 className="bank-offers-title">Pick Your TV Brand</h2>

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
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="brand-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelevisionsPage;
