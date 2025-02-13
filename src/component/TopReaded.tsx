import { useSelector } from "react-redux";
import MainCard from "./cards/MainCard";
import { BlogItem, RootState } from "@/types/types";
function TopReaded() {
  const blogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );
  const topReaded = blogPosts.filter((item: BlogItem) => item.topStory);

  return (
    <section className="container mt-4">
      <h2>Top Read</h2>
      <div className="flex flex-wrap md:flex-row justify-between gap-4">
        {topReaded.slice(0, 3).map((item: BlogItem) => (
          <MainCard
            key={item.id}
            id={item.id}
            category={item.category}
            imageUrl={item.coverImg}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export default TopReaded;
