import { BlogItem, BlogState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialItemState: BlogState = {
  blogItems: [],
  categories: [],
  activeCategory: "",
  activeBlogPost: undefined,
};
const blogItemsSlice = createSlice({
  name: "blog",
  initialState: initialItemState,
  reducers: {
    setBlogItems(state, action: PayloadAction<BlogItem[]>) {
      state.blogItems = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setActiveBlogPost(state, action: PayloadAction<number>) {
      state.activeBlogPost = action.payload;
    },
  },
});
export const blogItems = blogItemsSlice.actions;
export default blogItemsSlice;
