import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/features/Auth";
import { productSlice } from "@/features/product/productSlice";
import { searchSlice } from "@/features/SearchFollow/searchSlice";
import { postSlice } from "@/features/Post/postSlice";
import { fetchSlice } from "@/features/product/fetchSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
    [postSlice.reducerPath]: postSlice.reducer,
    [fetchSlice.reducerPath]: fetchSlice.reducer,
  },
});
window.store = store;
