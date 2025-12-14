import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Hàm gọi API Repost
export const repostService = createAsyncThunk(
  "repost/repostService",
  async (postId) => {
    const response = await http.post(`posts/${postId}/repost`, postId);
    return response.data;
  }
);
