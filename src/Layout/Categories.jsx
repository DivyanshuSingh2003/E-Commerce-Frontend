import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  MdSmartphone,
  MdTv,
  MdAcUnit,
  MdLaptop,
  MdHeadphones,
  MdWatch,
  MdBatteryFull,
  MdSpeaker,
  MdCameraAlt,
  MdHotTub,
} from "react-icons/md";

const categoriesArray = [
  { name: "Mobiles", icon: <MdSmartphone size={36} className="text-blue-500" />, path: "/mobiles" },
  { name: "Televisions", icon: <MdTv size={36} className="text-purple-500" />, path: "/televisions" },
  // { name: "Air Conditioners", icon: <MdAcUnit size={36} className="text-cyan-500" />, path: "/air-conditioners" },
  { name: "Laptops", icon: <MdLaptop size={36} className="text-orange-500" />, path: "/laptops" },
  { name: "Headphones", icon: <MdHeadphones size={36} className="text-pink-500" />, path: "/headphones" },
  { name: "Accessories", icon: <MdWatch size={36} className="text-green-500" />, path: "/accessories" },
  { name: "Powerbanks", icon: <MdBatteryFull size={36} className="text-yellow-500" />, path: "/powerbanks" },
  { name: "Speakers", icon: <MdSpeaker size={36} className="text-indigo-500" />, path: "/speakers" },
  { name: "Cameras", icon: <MdCameraAlt size={36} className="text-red-500" />, path: "/cameras" },
  { name: "Geysers", icon: <MdHotTub size={36} className="text-teal-500" />, path: "/geysers" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-12xl mx-auto px-4">

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="p-2"
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {categoriesArray.map((cat, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => navigate(cat.path)}
                className="flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer bg-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300 border border-gray-100"
              >
                <div className="mb-2">{cat.icon}</div>

                <p className="text-sm text-center font-medium text-gray-700">
                  {cat.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Categories;