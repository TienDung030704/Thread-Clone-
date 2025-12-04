import { repostService } from "@/service/post/postService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
export const repostSlice = createSlice({
  name: "repost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(repostService.fulfilled, (state, action) => {
      state.list.forEach((post) => {
        if (post.id === action.payload.postId) {
          post.replies_count++;
        }
      });
    });
  },
});
export const { reducerPath } = repostSlice;
export default repostSlice.reducer;
