import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../app/slicer/Slicer";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
