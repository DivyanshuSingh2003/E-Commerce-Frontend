import { useEffect } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Layout/Home";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./Component/Footer";
import { CartProvider } from "./context/CartContext";
const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // controls the speed (higher = slower scroll)
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // cleanup if component unmounts
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Navbar />
    <AppRoutes />
    <Footer/>
    </Router>
  );
};

export default App;
