import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";
// Ham API goi Register
export const authRegister = createAsyncThunk(
  "auth/authRegister",
  async (data) => {
    const response = await http.post("auth/register", data);
    return response.data;
  }
);
// Ham API goi login
export const authLogin = createAsyncThunk("auth/authLogin", async (data) => {
  const response = await http.post("auth/login", data);
  return response.data;
});
// Ham API Logout
export const authLogout = createAsyncThunk("auth/authLogout", async (data) => {
  const response = await http.post("auth/logout", data);
  return response.data;
});
// Ham API ForgotPassword
export const authForgot = createAsyncThunk("auth/authForgot", async (data) => {
  const response = await http.post("auth/forgot-password", data);
  return response.data;
});

// Ham API Verify token
export const authVerify = createAsyncThunk("auth/authVerify", async (data) => {
  const response = await http.get("auth/verify-email", data);
  return response.data;
});

// Ham API ResetPassword
export const authReset = createAsyncThunk("auth/authReset", async (data) => {
  const response = await http.post("auth/reset-password", data);
  return response.data;
});
