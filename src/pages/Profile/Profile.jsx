import React from "react";

export const Profile = () => {
  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center mt-4 rounded-[20px]" 
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
    >
      <h1 className="mt-[50px] text-center text-2xl font-bold text-white">Card Details</h1>
      <div className="mx-auto mt-[80px]  flex w-[800px] flex-col space-y-4 rounded-lg bg-[#000000cf] p-[50px] shadow-lg">
        <input
          className="rounded-md border border-gray-300 p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          type="text"
        />
        <input
          className="rounded-md border border-gray-300 p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Family"
          type="text"
        />
        <input
          className="rounded-md border border-gray-300 p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="MM/YY"
          type="text"
        />
        <input
          className="rounded-md border border-gray-300 p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Card Number"
          type="text"
        />
        <button className="focus:ou tline-none rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
          Save
        </button>
      </div>
    </div>
  );
};
