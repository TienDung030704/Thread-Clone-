import { createSlice } from "@reduxjs/toolkit";
import { authRegister } from "@/service/auth/authService";
const initialState = {
  loading: false,
  userInfo: {},
  success: false,
  error: null,
  userToken: null,
};
export const authRegisterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.userToken = action.payload?.access_token || null;
        state.success = true;
        state.loading = false;
      })
      .addCase(authRegister.rejected, (state) => {
        state.success = false;
        state.loading = false;
      });
  },
});
export const { reducerPath } = authRegisterSlice;
export default authRegisterSlice.reducer;
