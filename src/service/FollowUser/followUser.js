import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Hàm gọi API Like
export const followUserService = createAsyncThunk(
  "follow/followUserService",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await http.post(`users/${userId}/follow`, userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
