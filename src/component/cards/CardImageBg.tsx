import React from "react";
import CategoryUI from "../ui/CategoryUI";
import { MainCardProp } from "@/types/types";

function CardImageBg({ category, imageUrl, title }: MainCardProp) {
  const backgroundUrl = typeof imageUrl === "string" ? imageUrl : imageUrl.src;

  return (
    <div
      className="relative h-[25rem] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="absolute bottom-4  text-white">
        {/* <p className="uppercase text-sm tracking-wide opacity-80">{category}</p> */}
        <div className="px-4">
          <CategoryUI category={category} />
          <h3 className="text-white"> {title} </h3>
        </div>
        <div className="btn-2 border-white">
          <span className="pl-4">Read more</span>
        </div>
      </div>
    </div>
  );
}

export default CardImageBg;
