import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay,Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/style.css";
import oneplus from "../assets/images/oneplus.jpg";
import iphone from "../assets/images/iphone.jpg";
import samsung from "../assets/images/samsung.jpg";
import secondwatch from "../assets/images/watch.jpg";
import watch from "../assets/images/wathc.webp";

const slides = [
  {
    title: "OnePlus Nord 5 5G",
    description: "8GB | 256GB",
    oldPrice: "₹37,999",
    newPrice: "₹31,499",
    image: oneplus,
    button: "Shop now",
    type: "image",
  },
  {
    title: "iPhone 15 Pro",
    description: "128GB | Titanium Finish",
    oldPrice: "₹1,39,999",
    newPrice: "₹1,29,999",
    image: iphone,
    button: "Shop now",
    type: "image",
  },
  {
    title: "Samsung Galaxy S24",
    description: "12GB | 512GB",
    oldPrice: "₹89,999",
    newPrice: "₹79,999",
    image: samsung,
    button: "Shop now",
    type: "image",
  },
{
  title: "Noise Headphones X1",
  description: "Wireless | Noise Cancelling",
  oldPrice: "₹9,999",
  newPrice: "₹7,499",
  image: watch,
  button: "Shop now",
  type: "image",
},
{
  title: "Nothing Phone 2",
  description: "8GB | 256GB | Matte Black",
  oldPrice: "₹45,999",
  newPrice: "₹39,999",
  image: secondwatch, // replace with your Nothing phone image variable
  button: "Shop now",
  type: "image",
},

];

const PromoBanner = () => {
  return (
    <div className="promo-banner">
  <Swiper
  modules={[Navigation, Autoplay, Pagination]}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop
  pagination={{ clickable: true }} // enables clickable pagination
  className="promo-swiper"
>
  {slides.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="slide-container">
        <img src={item.image} alt={item.title} />
        <div className="slide-text">
          <h2 className="slide-title">{item.title}</h2>
          <p className="slide-description">{item.description}</p>
          <div className="slide-prices">
            <span className="old-price">{item.oldPrice}</span>
            <span className="new-price">{item.newPrice}</span>
          </div>
          <button className="slide-button">{item.button}</button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default PromoBanner;
