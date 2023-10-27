import React from "react";
import { Emision } from "../models";
import { BsPlayCircleFill } from "react-icons/bs";
type Props = {
  item: Emision;
};
export const TitleItem: React.FC<Props> = ({ item }) => {
  return (
    <div className=" flex items-center py-2 justify-between">
      <div className="flex items-center">
        <div className="pr-2">
          <BsPlayCircleFill color="#C9C9C9"/>
        </div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap block max-w-[11em] text-[#3b4248]">
          {item.title}
        </div>
      </div>

      <div className="bg-sky-300 font-bold text-white text-[10px] px-2 rounded-md">
        ANIME
      </div>
    </div>
  );
};
