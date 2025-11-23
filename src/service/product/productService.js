import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";

export const productService = createAsyncThunk(
  "list/productService",
  async () => {
    const response = await http.get("posts/feed");
    return response.data;
  }
);
