import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";
export const commentReplyService = createAsyncThunk(
  "post/commentReplyService",
  async ({ postId, page }) => {
    const response = await http.get(`posts/${postId}/replies`, {
      params: {
        page: page,
        per_page: 10,
      },
    });
    return response.data;
  }
);
