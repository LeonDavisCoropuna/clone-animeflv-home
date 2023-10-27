import React, { useState } from "react";
import { Emision } from "../models";
import { BsPlayCircleFill } from "react-icons/bs";
type Props = {
  item: Emision;
};
export const TitleItem: React.FC<Props> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" flex items-center py-2 justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="pr-2">
          <BsPlayCircleFill color={`${isHovered ? "skyBlue" : "gray"}`} />
        </div>
        <div
          className={`overflow-hidden text-ellipsis whitespace-nowrap block max-w-[11em]  ${
            isHovered
              ? "text-sky-400 duration-200"
              : "text-[#3b4248] duration-200"
          }`}
        >
          {item.title}
        </div>
      </div>

      <div
        className={` font-bold text-white text-[10px] px-2 rounded-md ${
          isHovered ? "bg-sky-500 duration-200" : "bg-sky-300 duration-200"
        }`}
      >
        ANIME
      </div>
    </div>
  );
};
