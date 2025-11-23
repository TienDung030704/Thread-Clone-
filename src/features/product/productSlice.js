import { productService } from "@/service/product/productService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
export const productSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productService.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export const { reducerPath } = productSlice;
export default productSlice.reducer;
