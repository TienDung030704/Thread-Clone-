import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Hàm gọi API save post
export const saveService = createAsyncThunk(
  "save/saveService",
  async (postId) => {
    const reponse = await http.post(`posts/${postId}/save`, postId);
    return reponse.data;
  }
);
