import { BsFillPlayFill } from "react-icons/bs";
import { CardItem, TitleItem } from "./components";
import { useAnimeList } from "./services";
import { useAnimeEmision } from "./services/useAnimeEmision";
export const Home: React.FC = () => {
  const animeList = useAnimeList("https://animefenix.tv/zerotwo");
  const animeEmision = useAnimeEmision("https://animefenix.tv");
  return (
    <div className="h-full w-full flex flex-col justify-center items-center py-5 px-56">
      <div className="bg-blue-500 w-full pb-1 rounded-md">
        <div className="bg-[url(https://www3.animeflv.net/assets/animeflv/img/bgb.jpg)] w-full  items-center flex justify-center text-[25px] font-light py-1 rounded-md">
          <span className="text-gray-300">
            <strong className="text-white font-bold">AnimeFLV</strong> tu fuente
            de anime online gratis en HD
          </span>
        </div>
      </div>

      <div className="flex justify-between  w-full py-4">
        <div className="w-[26%] ">
          <div className=" w-full rounded-sm ">
            <div className="flex items-center justify-between bg-white py-2">
              <h1 className="px-3 font-semibold">ANIMES EN EMISIÓN</h1>
              <div className="px-1">
                <BsFillPlayFill color="orange" size={30} />
              </div>
            </div>
            <div className="px-3 pt-6 bg-white mt-[1px]">
              {animeEmision.map((element, index) => (
                <TitleItem item={element} key={index} />
              ))}
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[74%]">
          <div className="">
            <div className="flex justify-between items-center  pb-4">
              <div>
                <h1 className="text-2xl font-light pl-5">Últimos episodios</h1>
              </div>
              <div className="px-5 text-white font-semibold py-1 bg-sky-500 rounded-full text-sm">
                HOY
              </div>
            </div>
            <div className="grid grid-cols-4 ">
              {animeList.map((item, index) => (
                <CardItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
