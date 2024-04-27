import React from "react";
import StarRatings from "react-star-ratings";

const ProductImageColumn = ({ product }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-full h-auto object-contain"
      />

      <StarRatings
        rating={product.rating}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="2px"
      />
      <div className="text-xl text-[#860A35] font-semibold my-2">
        Price:
        {product.price}{" "}
        <span className="text-sm text-gray-500 line-through">
          {product.originalPrice}
        </span>
      </div>
      <p className="text-gray-700 justify-around w-full">{product.details}</p>
    </div>
  );
};

export default ProductImageColumn;
