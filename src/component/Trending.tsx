import { BlogItem, RootState } from "@/types/types";
import React from "react";
import { useSelector } from "react-redux";
import img from "../assets/homeCover.avif";
import CardImageBg from "./cards/CardImageBg";
import SmCard from "./cards/SmCard";

function Trending() {
  const blogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );
  const trending = blogPosts.filter((post: BlogItem) => post.trending);
  const topReaded = blogPosts.filter((item: BlogItem) => item.topStory);
  return (
    <section className="container flex h-[30rem] ">
      <div className="w-[70%] pr-3 ">
        <h2 className="mb-3">Trending</h2>
        <div className="grid grid-cols-2 gap-4">
          {trending.slice(0, 2).map((item: BlogItem) => (
            <CardImageBg
              key={item.id}
              id={item.id}
              category={item.category}
              imageUrl={item.coverImg}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="w-[30%] ">
        <h2 className="mb-3">Top Read</h2>
        <div className="w-full h-[25rem] flex flex-col justify-between ">
          {topReaded.slice(3, 6).map((item: BlogItem) => (
            <SmCard
              key={item.id}
              id={item.id}
              category={item.category}
              imageUrl={item.coverImg}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
