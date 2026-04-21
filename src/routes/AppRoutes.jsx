import { Routes, Route } from "react-router-dom";
import Home from "../Layout/Home";

// Category pages
import Laptops from "../Component/pages/Laptops";
import Headphones from "../Component/pages/Headphones";
import ProdDetails from "../Component/pages/ProdDetails";
import TelevisionsPage from "../Component/pages/TelevisionsPage";
import AirConditionersPage from "../Component/pages/AirConditionersPage";
import Watches from "../Component/pages/Watches";
import Powerbanks from "../Component/pages/Powerbanks";
import Speakers from "../Component/pages/Speakers";
import Cameras from "../Component/pages/Cameras";
import Geysers from "../Component/pages/Geysers";
import CartPage from "../common/CartPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Categories */}
      <Route path="/prodDetails" element={<ProdDetails />} />
      <Route path="/televisions" element={<TelevisionsPage />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/air-conditioners" element={<AirConditionersPage />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/accessories" element={<Watches />} />
      <Route path="/powerbanks" element={<Powerbanks />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/geysers" element={<Geysers />} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
  );
};

export default AppRoutes;
