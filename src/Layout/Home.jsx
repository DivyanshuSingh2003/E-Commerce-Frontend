import React from "react";

import Categories from "./Categories";
import PromoBanner from "../common/PromoBanner";
import BankOffers from "../common/BankOffers";
import hdfcLogo from "../assets/images/hdfc.webp";
import tataNeuLogo from "../assets/images/tata-neu.png";
import iciciLogo from "../assets/images/icici.png";
import bobLogo from "../assets/images/bob.png";
import ProductCard from "../common/ProductCard";

import airpods from "../assets/images/airpods.webp";
import watchUltra from "../assets/images/watch-ultra.jpg";
import watchSeries11 from "../assets/images/watch-series11.jpg";
import watchSE from "../assets/images/watch-se.jpg";
import WhatsHot from "../common/WhatsHot";

import phoneImg from "../assets/images/phone.jpg";
import tvImg from "../assets/images/tv.webp";
import ps5Img from "../assets/images/ps5.jpg";
import acImg from "../assets/images/ac.jpg";

// --- New promo images for Watch Out For This ---
import jblPromo from "../assets/images/jbl-promo.jpg";
import samsungPromo from "../assets/images/samsung-promo.jpg";
import sonyPromo from "../assets/images/1.webp";

import ios26Img from "../assets/images/ios26.JPG";
import jblBanner from "../assets/images/jbl-promo1.jpg";
import samsungBanner from "../assets/images/samsung-promo.jpg";
import sonyBanner from "../assets/images/1.webp";
import watchesBanner from "../assets/images/watch.webp";

const Home = () => {
 
  //for what's hot
  const hotItems = [
    {
      name: "K13x 5G",
      subTitle: "oppo",
      oldPrice: "16,999",
      price: "₹10,499*",
      subText: "*Inclusive of all Offers",
      image: phoneImg,
    },
    {
      name: '32" Smart TV',
      subTitle: "Samsung",
      oldPrice: "22,900",
      price: "₹9,390*",
      subText: "*Inclusive of Bank Offers",
      image: tvImg,
    },
    {
      name: "PlayStation 5",
      subTitle: "Sony",
      price: "Starting at ₹41,290*",
      subText: "*Inclusive of all Offers",
      image: ps5Img,
    },
    {
      name: "Bestselling Powerbanks",
      subTitle: "Oppo",
      price: "Starting at ₹21,990*",
      subText: "*Exchange Benefits Up to ₹5,500",
      image: acImg,
    },
    {
      name: "K13x 5G",
      subTitle: "oppo",
      oldPrice: "16,999",
      price: "₹10,499*",
      subText: "*Inclusive of all Offers",
      image: phoneImg,
    },
    {
      name: '32" Smart TV',
      subTitle: "Samsung",
      oldPrice: "22,900",
      price: "₹9,390*",
      subText: "*Inclusive of Bank Offers",
      image: tvImg,
    },
    {
      name: "PlayStation 5",
      subTitle: "Sony",
      price: "Starting at ₹41,290*",
      subText: "*Inclusive of all Offers",
      image: ps5Img,
    },
    {
      name: "Bestselling Powerbanks",
      subTitle: "Oppo",
      price: "Starting at ₹21,990*",
      subText: "*Exchange Benefits Up to ₹5,500",
      image: acImg,
    },
  ];

  return (
    <div>
      <PromoBanner />
      <WhatsHot items={hotItems}
      path={"/prodDetails"} />
      {/* dealsItems={cromaDealsData}
        promoItems={promoItems}
        banners={bannerData} // ✅ correct: plural */}
      {/* <BankOffers offers={offersData} /> */}
    </div>
  );
};

export default Home;
