import { postDetailService } from "@/service/postDetail/postDetailService";
import { useDispatch, useSelector } from "react-redux";

// Hàm dispatch post Detail
export const useAutoPostDetail = () => {
  const dispatch = useDispatch();
  const postDetail = async (postId) => {
    const result = dispatch(postDetailService(postId));
    return result.payload;
  };
  return postDetail;
};
export const useGetCurrentInformation = () => {
  const currentUser = useSelector((state) => state.auth?.userInfo);
  const localStorageUser = localStorage.getItem("user_data");
  if (localStorageUser) {
    return JSON.parse(localStorageUser);
  }
  return currentUser;
};
