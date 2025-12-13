import { createReplyService } from "@/service/ReplyCreate/replyCreate";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  loading: false,
};
export const createReplySlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReplyService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = true;
    });
  },
});
export const { reducerPath } = createReplySlice;
export default createReplySlice.reducer;
