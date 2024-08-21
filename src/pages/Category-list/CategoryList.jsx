import React from "react";
import { userCategoryList } from "./Service/Query/user-category-list";
import { CategoryCard } from "../../Components/Category-Card/Category-Card";
import { Search } from "../../Components/Search/Search";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const CategoryList = () => {
  const { data } = userCategoryList();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="container mx-auto bg-cover bg-center p-8">
      <div className="mb-6 flex justify-center"></div>
      <span>
        <Search />
      </span>
      <h1 className="mb-8 mt-5 text-center text-3xl font-bold">
        Our Categories
      </h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="zoom-out-up"
      >
        {data?.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
