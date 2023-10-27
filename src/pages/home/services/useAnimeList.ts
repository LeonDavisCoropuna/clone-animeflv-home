import { useEffect, useState } from "react";
import { Item } from "../models";
import { extract } from "@extractus/article-extractor";
import { load } from "cheerio";

export const useAnimeList = (url: string) => {
  const [animeList, setAnimeList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const article = await extract(url);
        if (article?.content) {
          const $ = load(article.content);
          const elements = $(
            "div > div > div > div > div:has(a[href][title] > img[src][alt]):has(p + p)"
          );  

          const list: Item[] = elements.map((index, element) => {
            const img = $(element).find("div > a > img");
            const pElements = $(element).find("p");

            const description = pElements.map((pIndex, pElement) =>
              $(pElement).text()
            ).get();

            return {
              img: img.attr("src") || img.attr("alt") || "",
              description,
            };
          }).get();

          setAnimeList(list);
        }
      } catch (error) {
        // Maneja el error adecuadamente
        console.error("Error al obtener la lista de animes:", error);
      }
    };

    fetchAnimeList();
  }, [url]);

  return animeList;
};
