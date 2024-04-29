
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsColumn = ({ product, quantity, onQuantityChange }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      onQuantityChange(newQuantity);
    } else {
      toast.error("Not enough stock", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col p-4 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-[#860A35]">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.p}</p>
      <p className="text-lg mt-4 text-[#860A35]">
        Color: <span className="text-black">{product.color}</span>
      </p>
      <div className="flex mt-3 gap-4 items-center text-lg">
        <span className="text-[#860A35]">Size:</span>
        {product.sizes.map((size) => (
          <button
            key={size}
            className={`px-3 py-1 border border-[#860A35] rounded ${
              selectedSize === size
                ? "bg-[#860A35] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="text-lg mt-3 text-[#860A35]">
        Stock: <span className="text-black">{product.stock}</span>{" "}
      </p>
      <div className="flex items-center text-lg gap-3 space-x-2 my-2 text-[#860A35]">
        Quantity:
        <button
          onClick={() => handleQuantityChange(-1)}
          className="text-xl font-bold px-4 py-2 border border-[#860A35] rounded"
        >
          -
        </button>
        <span className="text-xl text-black">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="text-xl text-white font-bold px-4 py-2 bg-[#860A35] border-[#860A35] rounded"
        >
          +
        </button>
      </div>
      <p className="text-lg text-[#860A35]">
        Quality: <span className="text-gray-700"> {product.description}</span>
      </p>
      <h3 className="text-2xl md:text-4xl text-[#860A35] font-semibold mt-6">
        {product.motto}
      </h3>
      <ToastContainer />
    </div>
  );
};

export default ProductDetailsColumn;
