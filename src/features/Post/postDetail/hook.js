import { postDetailService } from "@/service/postDetail/postDetailService";
import { useDispatch, useSelector } from "react-redux";

// Hàm dispatch post Detail
export const useAutoPostDetail = () => {
  const dispatch = useDispatch();
  const postDetail = async (postId) => {
    const result = await dispatch(postDetailService(postId));
    return result.payload;
  };
  return postDetail;
};
export const useGetCurrentInformation = () => {
  const currentUser = useSelector((state) => state.post.currentProduct);
  return currentUser;
};
