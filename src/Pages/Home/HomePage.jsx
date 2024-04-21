import { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";

const HomePage = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
  
   fetch('orderDetails.json')
   .then((response) => response.json())
   .then((data) => setProducts(data))      
  },[])


  return (
      
    <div className="max-w-5xl mx-auto mb-5 mt-8">
     {
      products.map((product) =>  <OrderDetails key={product.product_id} product = {product} ></OrderDetails> )
     }


    </div>
  );
};

export default HomePage;
