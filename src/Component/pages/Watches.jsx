import React, { useRef } from "react";
import CommonPageController from "../../common/CommonPageController";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/style.css";

// 🕒 Hero Images (Replace with actual watch banners)
import watchBanner1 from "../../assets/images/watch-banner1.webp";
import watchBanner2 from "../../assets/images/watch-banner2.webp";
import watchBanner3 from "../../assets/images/watch-banner3.webp";

// 🕒 Product Images (Replace with actual watch product images)
import appleWatch from "../../assets/images/apple-watch.webp";
import fossilWatch from "../../assets/images/fossil-watch.webp";
import samsungWatch from "../../assets/images/samsung-watch.webp";
import noiseWatch from "../../assets/images/noise-watch.webp";

// 🕒 Brand Logos (Replace with actual logos)
import appleLogo from "../../assets/images/apple-logo.webp";
import fossilLogo from "../../assets/images/fossil-logo.webp";
import samsungLogo from "../../assets/images/samsung-logo.webp";
import noiseLogo from "../../assets/images/noise-logo.webp";

const Watches = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 🔹 Hero slider images
  const heroSlides = [watchBanner1, watchBanner2, watchBanner3];

  // 🔹 Top watches
  const bestsellers = [
    { id: 1, name: "Apple Watch Series 9", img: appleWatch, price: "₹39,999", rating: 4.8 },
    { id: 2, name: "Fossil Gen 6", img: fossilWatch, price: "₹22,499", rating: 4.5 },
    { id: 3, name: "Samsung Galaxy Watch 6", img: samsungWatch, price: "₹28,999", rating: 4.6 },
    { id: 4, name: "Noise ColorFit Pro 4", img: noiseWatch, price: "₹2,499", rating: 4.2 },
  ];

  // 🔹 Compact product cards
  const productCards = [
    { id: 1, name: "Apple Watch Series 9", price: "₹39,999", subText: "Latest with S9 chip", img: appleWatch },
    { id: 2, name: "Fossil Gen 6", price: "₹22,499", subText: "Premium build", img: fossilWatch },
    { id: 3, name: "Samsung Galaxy Watch 6", price: "₹28,999", subText: "Super AMOLED", img: samsungWatch },
    { id: 4, name: "Noise ColorFit Pro 4", price: "₹2,499", subText: "Affordable smart features", img: noiseWatch },
  ];

  // 🔹 Brands
  const brands = [
    { id: 1, name: "Apple", img: appleLogo },
    { id: 2, name: "Fossil", img: fossilLogo },
    { id: 3, name: "Samsung", img: samsungLogo },
    { id: 4, name: "Noise", img: noiseLogo },
  ];

  return (
    <div className="text-white">
      {/* 🔹 Hero Slider */}
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
                <img src={img} alt={`Slide ${idx + 1}`} className="hero-slide-image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔹 Product Grid using CommonPageController */}
      <CommonPageController
        heroSlides={[]} // not needed here
        show3D={false}
        products={bestsellers}
        productCards={productCards}
        productHeading="Top Smartwatches"
      />

      {/* 🔹 Brand Swiper */}
      <section className="smartphone-brands-section">
        <div className="container">
          <h2 className="bank-offers-title">Explore Watch Brands</h2>

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
    </div>
  );
};

export default Watches;
