import { followUserService } from "@/service/FollowUser/followUser";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  isFollowUser: false,
  currentFollowUser: null,
};
export const followUserSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(followUserService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.currentFollowUser = action.payload;
      state.isFollowUser = true;
    });
  },
});
export const { reducerPath } = followUserSlice;
export default followUserSlice.reducer;
