import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Hàm gọi API Like/Unlike
export const likeService = createAsyncThunk("like/likePost", async (postId) => {
  const response = await http.post(`posts/${postId}/like`, postId);
  return response.postId;
});
export const unLikeService = createAsyncThunk(
  "unLike/unLikePost",
  async (postId) => {
    const response = await http.post(`posts/${postId}/like`, postId);
    return response.postId;
  }
);

// Hàm gọi API Repost
export const repostService = createAsyncThunk(
  "repost/repostService",
  async (postId) => {
    const response = await http.post(`posts/${postId}/repost`, postId);
    return response.postId;
  }
);
