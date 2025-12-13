import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";
export const postDetailService = createAsyncThunk(
  "post/postDetailService",
  async (postId) => {
    const response = await http.get(`posts/${postId}`, postId);
    return response.data;
  }
);
