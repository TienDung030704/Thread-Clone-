import { repostService } from "@/service/repostServices/repostServices";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch repost
export const useAutoRePost = () => {
  const dispatch = useDispatch();
  const repost = async (postId) => {
    const result = await dispatch(repostService(postId));
    return result.payload;
  };
  return repost;
};
export const useGetCurrentRespost = () => {
  const currentRespost = useSelector((state) => state.list.currentRespost);
  return currentRespost;
};
