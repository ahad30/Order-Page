import React, { useEffect, useState } from "react";
import ProductImageColumn from "./Components/ProductImg";
import ProductDetailsColumn from "./Components/ProductDetails";



function HomePage() {
  // Sample product data to be used for the frontend testing
  const [product, setProduct] = useState({
    id: 1,
    image: "https://i.ibb.co/zQScQBZ/product.jpg", // Placeholder image URL
    title: "Comfy Jacket",
    color: "Black",
    p: "leather jacket",
    rating: 4.5,
    price: "$320",
    originalPrice: "$450",
    details:
      "Perfect armchair to relax in after a long day. Featuring a soft, plush cushioning.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat repellendus porro quas, numquam facere recusandae a consectetur sunt iure nostrum cupiditate quis quasi doloremque quam fuga doloribus corrupti ea.",
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    description:
      "This luxurious armchair offers exceptional comfort with its soft upholstery and ample cushioning. Ideal for your living room or reading nook.",
    motto: "Grab your choice and relax!",
  });

  // Uncomment below when ready to fetch data from an API
  /*
  useEffect(() => {
    fetch('https://api.example.com/products/1') // Replace with your actual API URL
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);
  */

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <ProductImageColumn product={product} />
        </div>
        <div className="md:col-span-3">
          <ProductDetailsColumn product={product} />
        </div>
      </div>
      <hr className="border-[#860A35] my-10" />
    </div>
  );
}
export default HomePage;
