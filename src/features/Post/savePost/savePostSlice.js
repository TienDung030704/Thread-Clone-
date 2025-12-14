import { saveService } from "@/service/saveServices/saveService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  isSavePost: false,
};
export const savePostSlice = createSlice({
  name: "savePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveService.fulfilled, (state, action) => {
      const postToAdd = action.payload;
      const result = state.list.find((item) => item.id === postToAdd.id);
      if (!result) {
        state.list.unshift(postToAdd);
        state.isSavePost = true;
      } else {
        state.list.shift(postToAdd);
        state.isSavePost = false;
      }
    });
  },
});
export const { reducerPath } = savePostSlice;
export default savePostSlice.reducer;
