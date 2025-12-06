import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  loading: false,
};
export const postCreateSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPostService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = true;
    });
  },
});
