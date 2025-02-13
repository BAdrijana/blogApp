import { combineReducers, configureStore } from "@reduxjs/toolkit";

import blogItemsSlice from "./blogItems";

// Reducer for blogItems
const blogItemsReducer = blogItemsSlice.reducer;

// Combine all reducers
const rootReducer = combineReducers({
  blogItems: blogItemsReducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
