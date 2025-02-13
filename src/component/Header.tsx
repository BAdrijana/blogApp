import React from "react";
import Image from "next/image";
import arrow from "../assets/right-arrow.png";
import asterisk from "../assets/asterisk.svg";
import { BlogItem, RootState } from "@/types/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utilis/store";
import { blogItems } from "../utilis/store/blogItems";
import Link from "next/link";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );

  // Ensure featuredPost is correctly fetched
  const featuredPost = blogPosts.find((post: BlogItem) => post.featured);
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  if (!featuredPost) {
    return <div>Loading or No Featured Post</div>; // Return early if no featured post
  }
  return (
    <div className="flex flex-col md:flex-row w-[90%] sm:w-[80%] lg:w-[60%] p-4 py-5 content-center items-center mx-auto my-0">
      <div className="w-full md:w-[40%] h-auto relative aspect-[3/4]">
        <Image
          src={featuredPost.coverImg}
          alt="Cover image"
          className="rounded-[45%] object-cover"
          fill
        />
      </div>

      <div className="w-full md:w-[60%] bg-red p-2 mt-4 md:mt-0 md:ml-4">
        <h1 className="h1">{featuredPost.title}</h1>
        <div className="flex flex-col md:flex-row items-end justify-between pt-4">
          <p className="w-full md:w-[50%] pr-3 font-playfair font-light text-s leading-loose">
            {featuredPost.shortDescription}
          </p>
          <Link
            href={`/${slugify(featuredPost.category)}/${slugify(
              featuredPost.title
            )}`}
            onClick={() => {
              dispatch(blogItems.setActiveCategory(featuredPost.category));
              dispatch(blogItems.setActiveBlogPost(featuredPost.id));
            }}
            className="btn ml-3 inline-flex h-fit content-end items-center w-auto"
          >
            <Image src={asterisk} className="m-0.5" alt="" />
            Read more
            <Image src={arrow} alt="arrow" className="w-6 ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
