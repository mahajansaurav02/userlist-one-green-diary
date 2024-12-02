import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust the path if necessary

export const store = configureStore({
  reducer: {
    users: userReducer, // Key must match the name used in `useSelector`
  },
});
