import { searchService } from "@/service/search/searchService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: [],
};
export const searchSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchService.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});
export const { reducerPath } = searchSlice;
export default searchSlice.reducer;
