import React from "react";
import { FiUser } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Navbar: React.FC<{}> = () => {
  return (
    <nav className="py-4 px-56 flex items-center justify-between  bg-[#1F1F23]">
      <button>
        <img
          src="https://www3.animeflv.net/assets/animeflv/img/logo.png?v=2.3"
          alt="AnimeFLV"
          className="align-middle h-auto w-auto"
        />
      </button>

      <div className="flex text-gray-500 items-center ">
        <div className="flex px-4">
          <button className="px-4 py-1 hover:text-white duration-150 font-bold text-md">
            INICIO
          </button>
          <button className="px-4 py-1 hover:text-white duration-150 font-bold text-md">
            DIRECTORIO ANIME
          </button>
        </div>
        <div className="bg-black rounded-3xl py-2 pl-3 flex ">
          <input
            type="text"
            placeholder="Buscar..."
            className="text-md bg-transparent outline-none max-w-[9em] pl-2"
          />
          <button className="pr-5">
            <BsSearch size={15} color="white" />
          </button>
        </div>
        <button className="p-2 ml-3 font-bold text-white rounded-md bg-black">
          <div className="flex justify-center items-center">
            <div className="pl-2 pr-1">
              <FiUser size={15} />
            </div>
            <div className="pr-2 pl-1 text-[13px]">LOGIN</div>
          </div>
        </button>
      </div>
    </nav>
  );
};
