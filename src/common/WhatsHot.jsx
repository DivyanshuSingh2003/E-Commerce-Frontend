import React from "react";
import "../css/style.css";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhatsHot = ({ items }) => {
  return (
    <div className="container mb-6">
      {/* Section 2: What's Hot */}
      <section className="section">
        <h1 className="bank-offers-title mt-12">What's Hot</h1>
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
                  <p className="whatshot-oldprice">{item.oldPrice}</p>
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
    </div>
  );
};

export default WhatsHot;
