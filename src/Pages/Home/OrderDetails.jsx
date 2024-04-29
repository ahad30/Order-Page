import React from "react";
import DeliveryAddressColumn from "./Components/DeliveryAddress";
import YourOrderColumn from "./Components/YourOrder";

const OrderPage = ({ product, quantity }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <DeliveryAddressColumn />
        </div>
        <div className="md:col-span-1">
          <YourOrderColumn product={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
