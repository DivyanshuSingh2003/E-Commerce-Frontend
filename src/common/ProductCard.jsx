import React from "react";
import "../css/style.css";
const ProductCard = ({ product }) => {
  return (

    
    
    <div className="product-card">
      {/* Product Name */}
      <h2 className="product-name">{product.name}</h2>

      {/* Price */}
      <p className="product-price">
        Starting at <strong>₹{product.price}</strong>
      </p>

      {/* Subtext */}
      {product.subText && <p className="product-subtext">{product.subText}</p>}

      {/* Buy Button */}
      <button className="product-button">Buy Now</button>

      {/* Product Image */}
      {product.image && (
        <img src={product.image} alt={product.name} className="product-image" />
      )}
    </div>
  );
};

export default ProductCard;
