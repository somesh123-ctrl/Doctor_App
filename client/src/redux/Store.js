import { configureStore } from "@reduxjs/toolkit";
import { AlertSlice } from "./features/AlertSlice.js";
import { userSlice } from "./features/UserSlice.js";

export default configureStore({
  reducer: {
    alerts: AlertSlice.reducer,
    user: userSlice.reducer,
  },
});
