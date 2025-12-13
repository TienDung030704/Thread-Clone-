import { postDetailService } from "@/service/postDetail/postDetailService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  loading: false,
};
export const postDetailSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDetailService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = true;
    });
  },
});
export const { reducerPath } = postDetailSlice;
export default postDetailSlice.reducer;
