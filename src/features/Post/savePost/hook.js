import { saveService } from "@/service/post/postService";
import { useDispatch } from "react-redux";
// Hàm dispatch SavePost
export const useSavePost = () => {
  const dispatch = useDispatch();
  const saveLike = async (postId) => {
    const result = await dispatch(saveService(postId));
    return result.payload;
  };
  return saveLike;
};
export const useGetCurrentSave = () => {
  const currentSave = useSelector((state) => state.list.currentSave);
  return currentSave;
};
