import { likeService, repostService } from "@/service/post/postService";
import { useDispatch } from "react-redux";

// Hàm dispatch likePost
export const useLikePost = () => {
  const dispatch = useDispatch();
  const like = async (postId) => {
    const result = await dispatch(likeService(postId));
    return result.payload;
  };
  return like;
};
// Hàm dispatch repost
export const useAutoRePost = () => {
  const dispatch = useDispatch();
  const repost = async (postId) => {
    const result = dispatch(repostService(postId));
    return result.payload;
  };
  return repost;
};
export const useGetCurrentLike = () => {
  const currentLike = useSelector((state) => state.list.currentLike);
  return currentLike;
};
export const useGetCurrentRespost = () => {
  const currentRespost = useSelector((state) => state.list.currentRespost);
  return currentRespost;
};
