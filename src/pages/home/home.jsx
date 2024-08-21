import React from "react";

export const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "

    >
      <h1 className="mb-4 mt-6 text-3xl font-bold">
        Siz hali hech qanday mahsulot yaratmagansiz
      </h1>
      <img className="w-1/1 mb-[20px]" src="./home-img.svg" alt="img" />
      <button
        onClick={() => (window.location.href = "/create-category")}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Birinchi mahsulotingizni yarating
      </button>
    </div>
  );
};
