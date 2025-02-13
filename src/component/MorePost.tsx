import React from "react";
import Image from "next/image";
import CategoryUI from "./ui/CategoryUI";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utilis/store";
import { blogItems } from "../utilis/store/blogItems";
import { useDispatch } from "react-redux";
import Link from "next/link";

function MorePost() {
  const dispatch = useDispatch<AppDispatch>();
  const blogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );
  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div className="container flex gap-8 mx-auto p-8">
      <div className="w-[70%] flex flex-col pb-2 gap-8">
        {blogPosts.map(
          (post, index) =>
            index % 2 !== 0 && (
              <div key={post.id} className="w-full mb-2">
                <Image
                  src={post.coverImg || "/default-image.jpg"}
                  alt={post.title}
                  className="w-full object-cover rounded-lg"
                  width={800}
                  height={400}
                />
                <CategoryUI category={post.category} />
                <h2 className="text-2xl font-semibold ">{post.title}</h2>
                <p className="text-sm mt-2 text-gray-600">
                  {post.shortDescription || "Short description of the post..."}
                </p>
                <div className="btn-2">Read more</div>
              </div>
            )
        )}
      </div>
      <div className="w-[30%] flex flex-col gap-8">
        {blogPosts.map(
          (post, index) =>
            index % 2 == 0 && (
              <div key={post.id} className="w-full pb-6">
                <Image
                  src={post.images[0] || "/default-image.jpg"}
                  alt={post.title}
                  className="w-full object-cover rounded-lg"
                  width={400}
                  height={250}
                />
                <CategoryUI category={post.category} />
                <h3 className="text-lg font-medium mt-1">{post.title}</h3>
                <Link
                  className="btn-2 mt-2 w-full"
                  href={`/${slugify(post.category)}/${slugify(post.title)}`}
                  onClick={() => {
                    dispatch(blogItems.setActiveCategory(post.category));
                    dispatch(blogItems.setActiveBlogPost(post.id));
                  }}
                >
                  <button>Read more</button>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default MorePost;
