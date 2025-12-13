import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const createReplyService = createAsyncThunk(
  "post/createReply",
  async ({ postId, replyData }) => {
    try {
      const formData = new FormData();
      // Append các field bắt buộc
      formData.append("content", replyData.content || ""); // trường nội dung
      formData.append("reply_permission", replyData.reply_permission || "");
      const response = await http.post(`posts/${postId}/reply`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
