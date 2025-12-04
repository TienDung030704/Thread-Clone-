import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";

//  Đoan nay đang khac cung bien nen no chua goi dc api cho nay goi api nè cho nayy nhạn undifnde
export const productService = createAsyncThunk(
  "list/productService",
  async () => {
    const response = await http.get("posts/feed", {
      params: {
        type: "for_you",
        page: 1,
        per_page: 10,
      },
    });
    return response.data;
  }
);
// Hàm gọi API cho thằng infinity scroll vs tham số là page
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (page) => {
  const response = await http.get("posts/feed", {
    params: {
      type: "for_you",
      page: page,
      per_page: 10,
    },
  });
  return response.data;
});
