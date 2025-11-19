import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/util/http";

export const authRegister = createAsyncThunk("auth/authRegister", async () => {
  const response = await http.post("auth/register");
  return response.data;
});

// export const authRegister = async (data) => {
//   const response = await http.post("/auth/register", data);
//   return response.data;
// };
