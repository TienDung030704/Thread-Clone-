import { followUserService } from "@/service/FollowUser/followUser";
import { unFollowUserService } from "@/service/UnfollowUser/UnFollowUser";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  isUnFollowUser: false,
  currentUnFollowUser: null,
};
export const unFollowUserSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(unFollowUserService.fulfilled, (state, action) => {
      state.list = action.payload;
      state.currentUnFollowUser = action.payload;
      state.isUnFollowUser = true;
    });
  },
});
export const { reducerPath } = unFollowUserSlice;
export default unFollowUserSlice.reducer;
