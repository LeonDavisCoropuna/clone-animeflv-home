import React, { useState } from "react";
import type { Item } from "../models";
import { AiOutlinePlayCircle } from "react-icons/ai";

type Props = {
  item: Item;
};

export const CardItem: React.FC<Props> = ({ item }) => {
  const title = item.description[0];
  const episode = item.description[1];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`pl-5 pb-3 flex justify-end bg-transparent relative`}>
      <button
        className={`w-48 h-32 bg-center bg-no-repeat bg-cover rounded-lg relative transform ${
          isHovered ? "scale-105" : "scale-100"
        } transition-transform duration-300`}
        style={{ backgroundImage: `url(${item.img})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute inset-0 rounded-lg ${
            isHovered && "bg-white bg-opacity-20 transition-transform"
          }`}
        ></div>
        {!isHovered && (
          <div className="absolute w-full flex justify-end p-1">
            <AiOutlinePlayCircle size={25} color="white" />
          </div>
        )}
        <div className="flex flex-col p-2 flex-grow justify-end h-full">
          <p className="text-[10px] bg-orange-500 text-white max-w-[8em] min-w-[7em] text-center rounded-md px-1">
            <strong> {episode}</strong>
          </p>
          <p className="text-[16px] overflow-hidden text-ellipsis whitespace-nowrap text-white">
            <strong>{title}</strong>
          </p>
        </div>
      </button>
    </div>
  );
};
