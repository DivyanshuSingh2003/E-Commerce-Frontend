import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    const item = cartItems.find(i => i.id === id);
    addToCart(item);
  };

  const handleDecrement = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item.quantity > 1) {
      removeFromCart(id);
      addToCart({ ...item, quantity: item.quantity - 1 });
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 mt-20">
          <p>Your cart is empty 😢</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-3 bg-teal-500 text-black rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-24 w-24 object-contain rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mt-1">
                    ₹{parseFloat(item.price.replace(/[^0-9.-]+/g, ""))}
                  </p>

                  <div className="flex items-center mt-2 gap-3">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                    >
                      <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                    >
                      <FaPlus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Taxes & Fees</span>
              <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{(totalPrice * 1.05).toFixed(2)}</span>
            </div>

            <button className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-3 rounded-lg transition">
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
