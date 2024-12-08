"use client";

import { NewsCard } from "@/components/newsCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import newsJSON from "./news.json";
import { News, ParseJSONToNewsClass } from "./const";

export default function Home() {
  const getNewsCards = () => {
    const newsArr = ParseJSONToNewsClass(newsJSON["hk"]);

    return newsArr.map((val: News, index: number) => {
      return <NewsCard news={val} key={index} />;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className=" w-10/12 h-full my-4 lg:my-10 text-2xl lg:max-w-6xl">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 lg:max-w-6xl">
        {getNewsCards()}
      </div>
    </div>
  );
}
