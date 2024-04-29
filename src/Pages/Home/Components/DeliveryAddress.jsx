// DeliveryAddressColumn.jsx
import React from "react";

const DeliveryAddressColumn = () => {
  return (
    
    <div className="flex justify-center">
      <div className="flex flex-col p-4 ">
        <h2 className="text-2xl font-bold text-[#860A35] flex justify-center">Delivery Address</h2>
  
      <div className="mt-4">
        <label htmlFor="name" className="block mb-1 text-[#860A35]">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full border border-[#860A35] rounded px-16 py-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="address" className="block mb-1 text-[#860A35]">
          Address:
        </label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          className="w-full border border-[#860A35] rounded px-16 py-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="mobile" className="block mb-1 text-[#860A35]">
          Mobile Number:
        </label>
        <input
          type="text"
          id="mobile"
          placeholder="Enter your mobile number"
          className="w-full border border-[#860A35] rounded px-16 py-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="review" className="block mb-1 text-[#860A35]">
          Review:
        </label>
        <textarea
          id="review"
          placeholder="Enter your review"
          className="w-full border border-[#860A35] rounded px-16 py-2"
        ></textarea>
      </div>
      </div>
    </div>
  );
};

export default DeliveryAddressColumn;
