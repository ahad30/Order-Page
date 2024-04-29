import React, { useState } from "react";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("Bkash"); // State to track selected payment method

  // Function to handle radio button change
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 text-sm md:text-lg">
      {/* First column: Radio buttons */}
      <div className="flex flex-col">
        <div>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Cash on"
              checked={selectedPayment === "Cash on"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2 ">Cash on</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Bkash"
              checked={selectedPayment === "Bkash"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2 ">Bkash</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Nagad"
              checked={selectedPayment === "Nagad"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2 ">Nagad</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Rocket"
              checked={selectedPayment === "Rocket"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2 ">Rocket</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Card"
              checked={selectedPayment === "Card"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2 ">Card</span>
          </label>
        </div>
      </div>

      {/* Second column: Form fields */}
      <div className="  w-full">
        {selectedPayment !== "Cash on" && (
          <form className="space-y-2 border border-[#860A35] p-4 min-w-[150px] ">
            <label
              htmlFor="paymentMethod"
              className="text-sm font-semibold w-full "
            >
              {`${selectedPayment} Number:`}
            </label>
            <input
              type="text"
              id="paymentMethod"
              className="border border-[#860A35] rounded-md p-2 w-full"
              placeholder={`Enter ${selectedPayment} number`}
            />

            <label
              htmlFor="paymentAmount"
              className="text-sm font-semibold mt-2 w-full"
            >
              Amount:
            </label>
            <input
              type="number"
              id="paymentAmount"
              className="border border-[#860A35] rounded-md p-2 w-full"
              placeholder="Enter payment amount"
            />

            <label
              htmlFor="paymentPin"
              className="text-sm font-semibold  mt-2 w-full"
            >
              PIN:
            </label>
            <input
              type="password"
              id="paymentPin"
              className="border border-[#860A35] rounded-md p-2 w-full"
              placeholder="Enter PIN"
            />
          </form>
        )}
      </div>
    </div>
  );
};
const OrderSummary = ({ totalAmount, quantity, shippingOption, product }) => {
  // Ensure this is a number
  if (!totalAmount || typeof totalAmount !== "number") {
    return <div>No total amount available</div>;
  }

  // Assuming VAT and delivery charge are calculated elsewhere
 const vat = product.vat;
  let deliveryCharge = 0;

  // Determine delivery charge based on shipping option
  if (shippingOption === "Chittagong") {
    deliveryCharge = 5;
  } else {
    deliveryCharge = 10;
  }

  // Calculate Final Total
  const finalTotal = totalAmount + deliveryCharge;

    return (
      <div className="w-full xl:w-3/5 bg-gray-200 md:bg-white rounded">
        <div className="flex flex-col p-4 ">
          <h2 className="text-2xl font-bold text-[#860A35] w-full text-center md:text-start">
            Order Summary
          </h2>
          <div className="mt-4">
            <div className="flex justify-between my-2">
              <p className="text-[#860A35]"> Total Amount:</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-[#860A35]">Total Product:</p>
              <p>{quantity}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-[#860A35]">Delivery Charge:</p>
              <p>${deliveryCharge}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-[#860A35]">VAT:</p>
              <p>${vat}</p>
            </div>
            <hr className="my-3 border-dashed border-[#860A35]" />
            <div className="flex justify-between font-bold">
              <p className="text-[#860A35]">Final Total:</p>
              <p>${finalTotal.toFixed(2)}</p>
            </div>
          </div>

          <div className="w-full my-4 ">
            <button
              type="submit"
              className="w-full text-white p-3 bg-[#860A35]"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    );
};
const PaymentAndSummaryGrid = ({
  product,
  quantity,
  total,
  shippingOption,
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  my-4">
        <div className="mb-4 p-6">
          <h2 className="text-2xl font-bold mb-4 text-[#860A35] text-center md:text-start w-full">
            Payment Method
          </h2>
          <PaymentMethod />
        </div>
        <div className=" p-6">
          {/* Render OrderSummary here */}
          <OrderSummary
            totalAmount={total}
            quantity={quantity}
            shippingOption={shippingOption}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentAndSummaryGrid;
