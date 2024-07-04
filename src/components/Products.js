import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4 px-4">
        <h1 className="text-2xl md:text-3xl bg-black rounded text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[600px] text-gray-600 text-center text-sm md:text-base">
          In bustling cities, shopping daily is often a part of life, as people
          prefer not to stockpile items due to limited storage space. Street
          markets and local shops become familiar haunts where shoppers can find
          everything from fresh produce to household essentials.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 items-center">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
