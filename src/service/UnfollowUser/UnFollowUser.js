import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Hàm gọi API Like
export const unFollowUserService = createAsyncThunk(
  "follow/unFollowUserService",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await http.post(`users/${userId}/follow`, {
        _method: "DELETE",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Follow failed" }
      );
    }
  }
);
