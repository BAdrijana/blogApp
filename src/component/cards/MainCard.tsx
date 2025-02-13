import Image from "next/image";
import { MainCardProp } from "@/types/types";
import CategoryUI from "../ui/CategoryUI";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { blogItems } from "../../utilis/store/blogItems";
import { AppDispatch } from "@/src/utilis/store";
function MainCard({ id, category, imageUrl, title }: MainCardProp) {
  const dispatch = useDispatch<AppDispatch>();
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  const imageSrc = typeof imageUrl === "string" ? imageUrl : imageUrl.src;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[31%]  flex flex-col justify-between">
      <CategoryUI category={category} />
      <Image src={imageSrc} alt="" width={350} height={150} />
      <div className="flex flex-col flex-grow justify-between mt-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <Link
          className="btn-2"
          href={`/${slugify(category)}/${slugify(title)}`}
          onClick={() => {
            dispatch(blogItems.setActiveCategory(category));
            dispatch(blogItems.setActiveBlogPost(id));
          }}
        >
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
