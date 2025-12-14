import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
// Hàm gọi API Like
export const likeService = createAsyncThunk("like/likePost", async (postId) => {
  const response = await http.post(`posts/${postId}/like`, postId);
  return response.data;
});
