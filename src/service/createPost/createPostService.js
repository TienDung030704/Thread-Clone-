import http from "@/util/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const createPostService = createAsyncThunk(
  "post/createPostService",
  async (postData, { rejectWithValue }) => {
    try {
      // đầu tiên Tạo FormData
      const formData = new FormData();
      // Append các field bắt buộc
      formData.append("content", postData.content || ""); // trường nội dung
      formData.append("topic_name", postData.topic_name || ""); // trường chủ đề
      formData.append("reply_permission", postData.reply_permission || ""); // trường trl reply
      formData.append(
        "requires_reply_approval",
        postData.requires_reply_approval || ""
      );

      const response = await http.post("posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
