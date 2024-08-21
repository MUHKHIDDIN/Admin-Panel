import React from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { loadState } from "../../Config/storage";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    {
      loadState("user") && localStorage.removeItem("user");
    }
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleList = () => {
    navigate("/categories");
  };

  return (
    <div className="pb-[30px] bg-[#4e5bca] rounded-[20px] p-9">
      <h1 className="mb-4 text-3xl font-bold text-white">Tovarlar</h1>
      <ul>
        <li className="flex justify-between gap-4">
          <div className="flex gap-4">
            <button onClick={handleHome} className="text-3xl text-[#ffffff]">
              Home /
            </button>
            <button onClick={handleList} className="text-3xl text-[#ffffff]">
              Tovarlar
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-[10px] bg-[#070707] px-4 py-2 text-3xl text-white"
          >
            Chiqish <CiLogout />
          </button>
        </li>
      </ul>
    </div>
  );
};
