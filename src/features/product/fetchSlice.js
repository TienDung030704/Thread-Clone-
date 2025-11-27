import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "@/service/product/productService";
const initialState = {
  post: [],
  page: 1,
  loading: false,
  error: null,
  hasMore: true,
};
export const fetchSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      if (action.payload && action.payload.length > 0) {
        state.post = [...state.post, ...action.payload];
        state.page += 1;
        state.hasMore = true;
      } else {
        state.hasMore = false;
      }
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    });
  },
});
export const { reducerPath } = fetchSlice;
export default fetchSlice.reducer;
