import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">GiftStore</div>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="nav-links">
        <div>Account</div>
        <div>Orders</div>
        <div>Cart</div>
      </div>
    </div>
  );
}

export default Navbar;
