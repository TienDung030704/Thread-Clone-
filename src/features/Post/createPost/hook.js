import { createPostService } from "@/service/createPost/createPostService";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch CreatePost
export const useCreatePost = () => {
  const dispatch = useDispatch();
  const createPost = async (postId) => {
    const result = await dispatch(createPostService(postId));
    return result.payload;
  };
  return createPost;
};
export const useGetCreatePost = () => {
  const currentCreatePost = useSelector((state) => state.auth?.userInfo);
  return currentCreatePost;
};
