import { configureStore } from "@reduxjs/toolkit";
import layoutReducers from "./reducers/layoutReducers";
export default configureStore({
  reducer: {
    layout: layoutReducers,
  },
});
