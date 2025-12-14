import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Hàm gọi API Like
export const followUserService = createAsyncThunk(
  "follow/followUserService",
  async (postId) => {
    const response = await http.post(`users/${postId}/follow`, postId);
    return response.data;
  }
);
