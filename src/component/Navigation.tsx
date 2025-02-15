// type navigationProps = string[];
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { blogItems } from "../utilis/store/blogItems";
import logo from "../assets/logo.svg";
import { RootState } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
const Navigation = () => {
  const categories = useSelector(
    (state: RootState) => state.blogItems.categories
  );
  const dispatch = useDispatch();
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavOpen]);
  return (
    <div className="w-full flex justify-between center border-box my-5 h-[60px] px-5 lg:px-0">
      <div className=" w-[20%] h-[100%] lg:border lg:border-solid lg:border-spacing-1 lg:border-black lg:border-l-0 flex justify-center center">
        <Link href="/">
          <Image src={logo} alt="" className="w-[10rem] " />
        </Link>
      </div>
      <nav className="lg:w-[80%] h-[100%] flex  center">
        <section className="MOBILE-MENU flex center lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {categories.map((category: string, index: number) => (
                <Link
                  href={`/${slugify(category)}`}
                  key={index}
                  className="py-1.5 px-2 cursor-pointer hover:text-accent"
                  onClick={() => {
                    dispatch(blogItems.setActiveCategory(category));
                  }}
                >
                  {category}
                </Link>
              ))}
            </ul>
            <div className=" w-[20%] p-2 flex justify-center border border-solid border-spacing-1 border-black  ">
              <Link href={"/login"} className="center hover:text-accent">
                *Admin
              </Link>
            </div>
          </div>
        </section>

        <section className="DESKTOP-MENU hidden lg:flex h-[100%] w-[100%]">
          <div className=" w-[80%] content-center border border-solid border-spacing-1 border-black border-l-0 ">
            <ul className=" flex justify-around content-center">
              {categories.map((category: string, index: number) => (
                <Link
                  href={`/${slugify(category)}`}
                  key={index}
                  className="py-1.5 px-2 cursor-pointer hover:text-accent"
                  onClick={() => {
                    dispatch(blogItems.setActiveCategory(category));
                  }}
                >
                  {category}
                </Link>
              ))}
            </ul>
          </div>
          <div className=" w-[20%] h-[100%] flex justify-center border border-solid border-spacing-1 border-black border-l-0 ">
            <Link href={"/login"} className="center hover:text-accent">
              *Admin
            </Link>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navigation;
