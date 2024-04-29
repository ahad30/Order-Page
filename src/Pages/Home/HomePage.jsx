import React, { useState } from "react";
import ProductImageColumn from "./Components/ProductImg";
import ProductDetailsColumn from "./Components/ProductDetails";
import YourOrderColumn from "./Components/YourOrder";
import DeliveryAddressColumn from "./Components/DeliveryAddress";
import PaymentAndSummaryGrid from "./Components/PaymentSummary";

function HomePage() {
  const [product, setProduct] = useState({
    id: 1,
    image: "https://i.ibb.co/zQScQBZ/product.jpg",
    title: "Comfy Jacket",
    color: "Black",
    p: "leather jacket",
    rating: 4.5,
    price: 320,
    originalPrice: 450,
    details:
      "Perfect armchair to relax in after a long day. Featuring a soft, plush cushioning.",
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    description: "This luxurious armchair offers exceptional comfort.",
    motto: "Grab your choice and relax!",
    vat: 20,
    discount: 40,
    shipping: 10,
  });
 const [shippingOption, setShippingOption] = useState("Chittagong");
  const [quantity, setQuantity] = useState(1);
  const price = parseFloat(product.price); // Ensure this is a number
  const subtotal = price * quantity;
  const vat = product.vat; // Ensure these are defined and are numbers
  const discount = product.discount;
  const total = subtotal + vat - discount;
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <ProductImageColumn product={product} />
        </div>
        <div className="md:col-span-3">
          <ProductDetailsColumn
            product={product}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
      </div>
      <hr className="border-[#860A35] my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <DeliveryAddressColumn />
        </div>
        <div className="md:col-span-1 md:ml-6">
          <YourOrderColumn
            product={product}
            quantity={quantity}
            onShippingOptionChange={setShippingOption}
          />
        </div>
      </div>
      <hr className="border-[#860A35] my-10" />
      <PaymentAndSummaryGrid
        product={product}
        quantity={quantity}
        total={total}
        shippingOption={shippingOption}
      />
    </div>
  );
}

export default HomePage;
