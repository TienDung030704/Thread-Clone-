import { likeService } from "@/service/post/postService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLiked: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(likeService.fulfilled, (state, action) => {
      state.list.forEach((post) => {
        if (post.id === action.payload.postId) {
          post.likes_count++;
          state.isLiked = true;
        }
      });
    });
  },
});

export const { reducerPath } = postSlice;
export default postSlice.reducer;
