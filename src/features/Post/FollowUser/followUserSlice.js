import { followUserService } from "@/service/FollowUser/followUser";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
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
      state.list.forEach((user) => {
        if (user.id === action.payload.userId) {
          state.list = action.payload;
          state.currentFollowUser = action.payload;
          state.isFollowUser = true;
        }
      });
    });
  },
});
export const { reducerPath } = followUserSlice;
export default followUserSlice.reducer;
