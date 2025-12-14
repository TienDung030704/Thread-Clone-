import { useDispatch, useSelector } from "react-redux";
import { likeService } from "@/service/likeServices/likeServices";
// Hàm dispatch likePost
export const useLikePost = () => {
  const dispatch = useDispatch();
  const like = async (postId) => {
    const result = await dispatch(likeService(postId));
    return result.payload;
  };
  return like;
};
export const useGetCurrentLike = () => {
  const currentLike = useSelector((state) => state.list.currentLike);
  return currentLike;
};
