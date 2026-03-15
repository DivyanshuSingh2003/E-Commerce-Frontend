import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import "../css/style.css";

const BankOffers = ({ offers }) => {
  return (
    <div className="bank-offers-section text-white p-6 mt-5">
      <h1 className="bank-offers-title">Exciting Bank Offers For You</h1>

      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeModeMomentum={false}
        className="bank-offers-swiper"
      >
        {[...offers, ...offers].map((offer, index) => (
          <SwiperSlide key={index} className="bank-offer-slide">
            <div className="bank-offer-card bg-white text-black rounded-lg shadow-md p-4 h-28 flex flex-col justify-center items-center">
              <img
                src={offer.image}
                alt={offer.bank}
                className="bank-offer-logo h-6 mb-2"
              />
              <p className="bank-offer-text text-sm font-bold text-center">
                {offer.text}
              </p>
              {offer.subText && (
                <p className="bank-offer-subtext text-xs text-gray-600 mt-1 text-center">
                  {offer.subText}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BankOffers;
