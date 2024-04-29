import React from "react";


const YourOrderColumn = ({ product, quantity ,onShippingOptionChange}) => {
  const price = parseFloat(product.price); // Ensure this is a number
  const subtotal = price * quantity;
  const vat = product.vat; // Ensure these are defined and are numbers
  const discount = product.discount;
  const total = subtotal + vat - discount;

  const handleShippingOptionChange = (event) => {
    onShippingOptionChange(event.target.value);
  };
  // Current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="w-full xl:w-3/5">
      <h2 className="mt-4 text-2xl font-bold flex justify-center text-[#860A35]">
        Your Order
      </h2>
      <div className="flex flex-col py-4 px-8 ">
        <p className="mt-4 mb-2">{product.title}</p>
        <div className="mt-4 flex items-center justify-between">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-auto mr-4"
          />
          <p className="text-[#860A35]">{quantity}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p>Price:</p>
          <p>${price.toFixed(2)}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p>VAT:</p>
          <p>${vat}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p>Discount:</p>
          <p>${discount}</p>
        </div>
        {/* Shipping Radio Buttons */}
        <div className="mt-4 flex justify-between">
          <label className="block mb-1 ">Shipping:</label>
          <div className="flex flex-col">
            <label className="mr-4">
              <input
                type="radio"
                name="shipping"
                value="Chittagong"
                onChange={handleShippingOptionChange}
              />{" "}
              Chittagong
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                value="Outside Chittagong"
                 onChange={handleShippingOptionChange}
              />{" "}
              Outside Chittagong
            </label>
          </div>
        </div>
        {/* Date */}
        <div className="mt-4 flex justify-between">
          <p>Date: </p>
          <p>{currentDate}</p>
        </div>

        <hr className="border-dashed border-[#860A35] my-4" />
        <div className="flex justify-between">
          <p className="font-bold">Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default YourOrderColumn;