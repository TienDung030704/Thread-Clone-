import { likeService } from "@/service/likeServices/likeServices";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLiked: false,
};

export const likeSlice = createSlice({
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

export const { reducerPath } = likeSlice;
export default likeSlice.reducer;
