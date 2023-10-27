import { useEffect, useState } from "react";
import { Emision, Item } from "../models";
import { extract } from "@extractus/article-extractor";
import { load } from "cheerio";

export const useAnimeEmision = (url: string) => {
  const [animeEmision, setAnimeEmision] = useState<Emision[]>([]);

  useEffect(() => {
    const fetchAnimeEmision = async () => {
      try {
        const article = await extract(url);
        if (article?.content) {
          const $ = load(article.content);
          const elements = $(
            "div > div > div > div > div:has(a[href][title] > img[src][alt]):has(p + p)"
          );

          const list: Emision[] = elements
            .map((index, element) => {
              const pElements = $(element).find("p");
              const description = pElements
                .map((pIndex, pElement) => $(pElement).text())
                .get();
              return {
                title: description[0],
              };
            })
            .get();
          setAnimeEmision(list);
        }
      } catch (error) {
        console.error("Error al obtener la lista de animes:", error);
      }
    };

    fetchAnimeEmision();
  }, [url]);

  return animeEmision;
};
