import { commentReplyService } from "@/service/ReplyComment/ReplyCommentService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  currentComment: null,
};
export const replyCommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(commentReplyService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.currentComment = action.payload;
      state.loading = true;
    });
  },
});
export const { reducerPath } = replyCommentSlice;
export default replyCommentSlice.reducer;
