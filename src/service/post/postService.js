import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Hàm gọi API Like
export const likeService = createAsyncThunk("like/likePost", async (postId) => {
  const response = await http.post(`posts/${postId}/like`, postId);
  return response.data;
});
// Hàm gọi API unLike
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

// Hàm gọi API save post
export const saveService = createAsyncThunk(
  "save/saveService",
  async (postId) => {
    const reponse = await http.post(`posts/${postId}/save`, postId);
    return reponse.data;
  }
);

// Hàm gọi API hide post
export const hideService = createAsyncThunk(
  "hide/hideService",
  async (postId) => {
    const reponse = await http.post(`posts/${postId}/hide`, postId);
    return reponse.data;
  }
);
