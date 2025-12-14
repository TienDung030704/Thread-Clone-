import { configureStore } from "@reduxjs/toolkit";
import { authRegisterSlice } from "@/features/Auth";
import { productSlice } from "@/features/product/productSlice";
import { searchSlice } from "@/features/SearchFollow/searchSlice";
import { postSlice } from "@/features/Post/postSlice";
import { fetchSlice } from "@/features/product/fetchSlice";
import { repostSlice } from "@/features/Post/repostSlice";
import { savePostSlice } from "@/features/Post/savePost/savePostSlice";
import { authLoginSlice } from "@/features/Auth/authLogin";
import { createReplySlice } from "@/features/Post/createReply/createReply";
import { postDetailSlice } from "@/features/Post/postDetail/postDetail";
import { replyCommentSlice } from "@/features/Post/getCommentReply/getCommentReply";

export const store = configureStore({
  reducer: {
    [authRegisterSlice.reducerPath]: authRegisterSlice.reducer,
    [authLoginSlice.reducerPath]: authLoginSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
    [postSlice.reducerPath]: postSlice.reducer,
    [fetchSlice.reducerPath]: fetchSlice.reducer,
    [repostSlice.reducerPath]: repostSlice.reducer,
    [savePostSlice.reducerPath]: savePostSlice.reducer,
    [createReplySlice.reducerPath]: createReplySlice.reducer,
    [postDetailSlice.reducerPath]: postDetailSlice.reducer,
    [replyCommentSlice.reducerPath]: replyCommentSlice.reducer,
  },
});
window.store = store;
