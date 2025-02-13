// type navigationProps = string[];
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { blogItems } from "../utilis/store/blogItems";
import logo from "../assets/logo.svg";
import { RootState } from "@/types/types";
import Link from "next/link";
const Navigation = () => {
  const categories = useSelector(
    (state: RootState) => state.blogItems.categories
  );
  const dispatch = useDispatch();
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full flex border-box mt-5 ">
      <div className=" w-[20%] border border-solid border-spacing-1 border-black border-l-0 flex justify-center">
        <Link href="/">
          <Image src={logo} alt="" className="w-[10rem] " />
        </Link>
      </div>
      <div className=" w-[60%] content-center border border-solid border-spacing-1 border-black border-l-0 ">
        <ul className=" flex justify-around content-center">
          {categories.map((category: string, index: number) => (
            <Link
              href={`/${slugify(category)}`}
              key={index}
              className="py-1.5 px-2 cursor-pointer"
              onClick={() => {
                dispatch(blogItems.setActiveCategory(category));
              }}
            >
              {category}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" w-[20%] flex justify-center border border-solid border-spacing-1 border-black border-l-0 ">
        <Link href={"/login"} className="center">
          *Admin
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
