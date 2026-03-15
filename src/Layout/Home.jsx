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
  //for Offers
  const offersData = [
    {
      bank: "HDFC",
      image: hdfcLogo,
      text: "Up to ₹7,500 Instant Discount on Credit Card EMI Txn",
      subText: "*T&C Apply",
    },
    {
      bank: "Tata Neu HDFC",
      image: tataNeuLogo,
      text: "Enjoy up to 5% extra savings",
      subText: "With Tata Neu HDFC Bank Credit Card",
    },
    {
      bank: "ICICI",
      image: iciciLogo,
      text: "Check Out Bank Offers on Your Favourite Brands",
      subText: "*T&C Apply",
    },
    {
      bank: "BOB",
      image: bobLogo,
      text: "Special Offers for Bank of Baroda Customers",
      subText: "*T&C Apply",
    },
  ];

  //for latest launches
  const products = [
    {
      name: "AirPods Pro3",
      price: "23,310",
      subText:
        "*Inclusive of NeuCoins on Tata Neu Infinity HDFC Bank Credit Card",
      image: airpods,
    },
    {
      name: "WATCH ULTRA 3",
      price: "80,910",
      subText:
        "*Inclusive of NeuCoins on Tata Neu Infinity HDFC Bank Credit Card",
      image: watchUltra,
    },
    {
      name: "WATCH SERIES 11",
      price: "42,210",
      subText:
        "*Inclusive of NeuCoins on Tata Neu Infinity HDFC Bank Credit Card",
      image: watchSeries11,
    },
    {
      name: "WATCH SE 3",
      price: "23,301",
      subText:
        "*Inclusive of NeuCoins on Tata Neu Infinity HDFC Bank Credit Card",
      image: watchSE,
    },
  ];

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
  ];

  // Croma Exclusive Hidden Deals Data
  const cromaDealsData = [
    {
      name: "Samsung Galaxy S23",
      subTitle: "Samsung",
      oldPrice: "79,999",
      price: "₹59,999*",
      subText: "*Special Croma Deal",
      image: phoneImg,
    },
    {
      name: 'LG OLED 55" TV',
      subTitle: "LG",
      oldPrice: "1,29,990",
      price: "₹99,990*",
      subText: "*Exclusive Offer for Limited Stock",
      image: tvImg,
    },
    {
      name: "Sony PlayStation 5",
      subTitle: "Sony",
      oldPrice: "49,990",
      price: "₹44,990*",
      subText: "*Croma Deal Price",
      image: ps5Img,
    },
    {
      name: "Philips Air Conditioner",
      subTitle: "Philips",
      oldPrice: "39,990",
      price: "₹32,990*",
      subText: "*Exchange Offer Available",
      image: acImg,
    },
  ];

  // Watch Out For This (promo banners)
  const promoItems = [
    { title: "JBL Partybox", image: jblPromo },
    { title: "Samsung Galaxy S25 FE", image: samsungPromo },
    { title: "Sony Bravia Festive Sale", image: sonyPromo },
  ];

  // Banner Data (Croma-style section)
  // Banner Data (multiple banners for swiper)
  const bannerData = [
    {
      image: ios26Img,
      title: "iOS 26 now available",
      subtitle: "Liquid Glass finally comes to your iPhone",
    },
     {
      image: watchesBanner,
      title: "iOS 26 now available",
      subtitle: "Liquid Glass finally comes to your iPhone",
    },
 
    {
      image: samsungBanner,
      title: "Samsung Galaxy S25 FE",
      subtitle: "Unleash the future of performance",
    },
    {
      image: sonyBanner,
      title: "Sony Bravia Festive Sale",
      subtitle: "Experience cinema at home",
    },
  ];

  return (
    <div>
      <PromoBanner />
      <div className="container">
       

         {/* ✅ Categories Swiper */}
        <div className="my-6">
          <Categories />
        </div>

        <div className="latest-launches-section p-6">
          <h1 className="bank-offers-title ">Latest Launches</h1>

          <div className="latest-launches grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

      </div>
      <WhatsHot
        items={hotItems}
        dealsItems={cromaDealsData}
        promoItems={promoItems}
        banners={bannerData} // ✅ correct: plural
      />
         <BankOffers offers={offersData} />
    </div>
  );
};

export default Home;
