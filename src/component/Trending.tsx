import { BlogItem, RootState } from "@/types/types";
import React from "react";
import { useSelector } from "react-redux";
import CardImageBg from "./cards/CardImageBg";
import SmCard from "./cards/SmCard";

function Trending() {
  const blogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );
  const trending = blogPosts.filter((post: BlogItem) => post.trending);
  const topReaded = blogPosts.filter((item: BlogItem) => item.topStory);

  return (
    <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-6 mt-6 px-4">
      <div className="w-full md:w-[70%]">
        <h2 className="mb-3 text-lg font-bold">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="w-full md:w-[30%]">
        <h2 className="mb-3 text-lg font-bold">Top Read</h2>
        <div className="flex flex-col gap-4">
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
