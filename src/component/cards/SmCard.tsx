import React from "react";
import CategoryUI from "../ui/CategoryUI";
import Image from "next/image";
import img from "../../assets/homeCover.avif";
import line from "../../assets/line.svg";
import { MainCardProp } from "@/types/types";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { blogItems } from "../../utilis/store/blogItems";
function SmCard({ id, category, imageUrl, title }: MainCardProp) {
  const imageSrc = typeof imageUrl === "string" ? imageUrl : imageUrl.src;
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  const dispatch = useDispatch();
  return (
    <Link
      href={`/${slugify(category)}/${slugify(title)}`}
      onClick={() => {
        dispatch(blogItems.setActiveCategory(category));
        dispatch(blogItems.setActiveBlogPost(id));
      }}
      className="flex items-start gap-2 "
    >
      <div className="w-[30%] h-auto relative aspect-[3/4]">
        <Image
          src={imageSrc}
          alt="sm-card-img"
          className="object-cover"
          fill // Makes the image fill the container
        />
      </div>
      <div className="flex flex-col justify-between p-2 pt-0 w-[60%]">
        <div>
          <div className="flex items-center uppercase text-[8px] tracking-wide">
            {category}
            <Image className="w-6 pl-2" src={line} alt="" />
          </div>
        </div>
        <h5 className="text-sm font-playfair pt-1">{title}</h5>
      </div>
    </Link>
  );
}

export default SmCard;
