import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AllProductCard } from "../../Components/All-product-card/All-product-card";
import { useProductList } from "../Category-product/Service/Query/use-Product-List";
import { Search2 } from "../../Components/Search2";

export const AllProduct = () => {
  const { data: products, isLoading } = useProductList();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-cover bg-center p-8">
      <span>
        <Search2 />
      </span>
      <h1 data-aos="fade-down" className="mt-8 text-center text-3xl font-bold">
        Our Products
      </h1>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((item) => (
          <AllProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
