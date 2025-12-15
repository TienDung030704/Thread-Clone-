import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";
// Ham API goi Register
export const authUserService = createAsyncThunk(
  "auth/authUserService",
  async () => {
    const response = await http.get("auth/user");
    return response.data;
  }
);
