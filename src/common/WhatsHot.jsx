import React from "react";
import "../css/style.css";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhatsHot = ({ items, dealsItems, promoItems, banners }) => {
  return (
    <div className="container mb-6">

      {/* 🔹 Section: Banner Swiper */}
    

      {/* Section 1: Promo Grid */}
      {promoItems && promoItems.length > 0 && (
        <section className="section promo-section mt-10">
          <h1 className="bank-offers-title mt-6">Watch Out For This</h1>
          <div className="promo-grid">
            {promoItems.map((promo, index) => (
              <div key={index} className="promo-card">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="promo-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: What's Hot */}
      <section className="section">
        <h1 className="bank-offers-title mt-6">What's Hot</h1>
        <div className="whatshot-cards-container">
          {items.map((item, index) => (
            <div key={index} className="whatshot-card">
              <h3 className="whatshot-name">{item.name}</h3>
              {item.subTitle && (
                <p className="whatshot-subtitle">{item.subTitle}</p>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="whatshot-image"
              />
              <div className="whatshot-price-box">
                {item.oldPrice && (
                  <p className="whatshot-oldprice">₹{item.oldPrice}</p>
                )}
                <p className="whatshot-price">{item.price}</p>
              </div>
              {item.subText && (
                <p className="whatshot-subtext">{item.subText}</p>
              )}
            </div>
          ))}
        </div>
      </section>


        {banners && banners.length > 0 && (
        <section className="section banner-section mt-10">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="banner-swiper-container"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="banner-container">
                  {/* Left Side: Image */}
                  <div className="banner-image-wrapper">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="banner-image"
                    />
                  </div>

                  {/* Right Side: Text */}
                  <div className="banner-content">
                    <h2 className="banner-title">{banner.title}</h2>
                    <p className="banner-subtitle">{banner.subtitle}</p>
                    <button className="banner-btn">Read Now</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </div>
  );
};

export default WhatsHot;
