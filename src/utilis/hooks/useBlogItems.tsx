import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { BlogItem } from "@/types/types";
import { blogItems } from "../store/blogItems";

const useBlogItems = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const getBlogItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/db.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      const posts: BlogItem[] = jsonData.post;
      const categories = [...new Set(posts.map((post) => post.category))];

      dispatch(blogItems.setBlogItems(posts)); // Dispatch blog posts
      dispatch(blogItems.setCategories(categories)); // Dispatch categories
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]); // Memoize `getBlogItems` so it doesn’t change on each render

  return { getBlogItems, isLoading, error };
};

export default useBlogItems;
