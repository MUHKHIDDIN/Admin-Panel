import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { loadState } from "../../Config/storage";
import { IoCreateSharp } from "react-icons/io5";
import { FaHome, FaListUl, FaBox, FaPlusCircle } from "react-icons/fa";
import {Header} from "../header/header";
import { FaIdCard } from "react-icons/fa";
export const MainLayout = () => {
  const user = loadState("user");

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="flex w-[120px] flex-col items-center  bg-[#5f5ced] p-4 shadow-lg">
        <nav className="mt-10 flex flex-1 flex-col items-center gap-12">
          <Link
            to="/"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <FaHome />
          </Link>
          <Link
            to="/category"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <FaListUl />
          </Link>
          <Link
            to="/all-product"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <FaBox />
          </Link>
          <Link
            to="/create-category"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <IoCreateSharp />
          </Link>
          <Link
            to="/create-product"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <FaPlusCircle />
          </Link>
          <Link
            to="/profile"
            className="text-2xl text-white transition-transform duration-300 hover:scale-105 hover:text-[#ff3030]"
          >
            <FaIdCard />
          </Link>
        </nav>
      </div>

     
      <div className="flex-1 overflow-y-auto rounded-lg bg-white p-6 shadow-inner">
      <Header/>
        <Outlet />
      </div>
    </div>
  );
};
