import React from "react";
export const AllProductCard = ({ img, name, price }) => {
  return (
    <div className="m-5 transform overflow-hidden rounded-lg bg-[#EFE8E8] shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative flex items-center justify-center">
        <img
          className="mt-5 h-[170px] w-[200px] transition-transform duration-500"
          src={img}
          alt={name}
        />
      </div>
      <div className="bg-[#1A1717] p-4">
        <h2 className="mb-2 text-lg font-semibold text-white transition-colors duration-300">
          {name}
        </h2>
        <p className="text-xl font-bold text-[#fffefe]">${price}</p>
      </div>
    </div>
  );
};
