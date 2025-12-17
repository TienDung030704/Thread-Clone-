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
      state.list.forEach((user) => {
        if (user.id === action.payload.userId) {
          state.list = action.payload;
          state.currentFollowUser = action.payload;
          state.isUnFollowUser = true;
        }
      });
    });
  },
});
export const { reducerPath } = unFollowUserSlice;
export default unFollowUserSlice.reducer;
