import { likeService, repostService } from "@/service/post/postService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
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
        } else {
          post.likes_count--;
        }
      });
    });
  },
});

export const repostSlice = createSlice({
  name: "repost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(repostService.fulfilled, (state, action) => {
      state.list.forEach((post) => {
        if (post.id === action.payload.postId) {
          post.reposts_and_quotes_count++;
        } else {
          post.reposts_and_quotes_count--;
        }
      });
    });
  },
});

export const { actions } = postSlice;
export default postSlice.reducer;
