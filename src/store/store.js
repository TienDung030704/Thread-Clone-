import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/features/Auth";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
  },
});
window.store = store;
