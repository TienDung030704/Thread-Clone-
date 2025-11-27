import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";

export const productService = createAsyncThunk(
  "list/productService",
  async () => {
    const response = await http.get("posts/feed", {
      params: {
        type: "for_you",
        page: page,
        per_page: per_page,
      },
    });
    return response.data;
  }
);
// Hàm gọi API cho thằng infinity scroll vs tham số là page
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (page) => {
  const response = await autoProduct(page);
  return response;
});
