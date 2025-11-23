import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/features/Auth";
import { productSlice } from "@/features/product/productSlice";
import { searchSlice } from "@/features/SearchFollow/searchSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
  },
});
window.store = store;
