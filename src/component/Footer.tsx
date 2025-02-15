// import React from 'react'
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { blogItems } from "../utilis/store/blogItems";
import { RootState } from "@/types/types";
export default function Footer() {
  const categories = useSelector(
    (state: RootState) => state.blogItems.categories
  );
  const dispatch = useDispatch();
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer className=" bg-black w-[100vw] md:h-[25rem] py-5 m-0  flex flex-col justify-around items-center">
      <div className="py-2">
        <Link href="/">
          <Image src={logo} alt="footer logo" width={200} height={150} />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col center md:flex-row ">
          {categories.map((category: string, index: number) => (
            <Link
              href={`/${slugify(category)}`}
              key={index}
              className="py-3 px-2 cursor-pointer text-primary hover:text-accent"
              onClick={() => {
                dispatch(blogItems.setActiveCategory(category));
              }}
            >
              {category}
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-[80%] md:w-[60%] mt-3  border-t border-solid border-opacity-50 border-primary ">
        <p className="text-center mt-5 text-primary">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
