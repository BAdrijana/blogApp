export interface BlogItem {
  category: string;
  id: number;
  coverImg: string;
  title: string;
  shortDescription: string;
  body: string;
  images: string[];
  rating: string;
  timeToRead: string;
  author: string;
  topStory: boolean;
  trending: boolean;
  featured: boolean;
}
interface BlogState {
  blogItems: BlogItem[];
  categories: string[];
  activeCategory: string | undefined;
  activeBlogPost: number | undefined;
}

// Combine all reducers
const rootReducer = combineReducers({
  blogItems: blogItemsReducer, // Your blogItems reducer
  // other reducers if you have
});

// RootState type
export type RootState = ReturnType<typeof rootReducer>;
export type MainCardProp = {
  id: number;
  category: string;
  imageUrl: string | { src: string };
  title: string;
};
