import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";
export const searchService = createAsyncThunk(
  "list/searchService",
  async () => {
    const response = await http.get("users/suggestions");
    return response.data;
  }
);
