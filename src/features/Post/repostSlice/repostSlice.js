import { repostService } from "@/service/repostServices/repostServices";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  isRePosted: false,
};
export const repostSlice = createSlice({
  name: "repost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(repostService.fulfilled, (state, action) => {
      state.list.forEach((post) => {
        if (post.id === action.payload.postId) {
          post.reposts_and_quotes_count++;
          state.isRePosted = true;
        }
      });
    });
  },
});
export const { reducerPath } = repostSlice;
export default repostSlice.reducer;
