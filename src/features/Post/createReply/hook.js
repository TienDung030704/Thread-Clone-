import { createReplyService } from "@/service/ReplyCreate/replyCreate";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch CreatePost
export const useCreateReply = () => {
  const dispatch = useDispatch();
  const createPostReply = async ({ postId, replyData }) => {
    const result = await dispatch(createReplyService({ postId, replyData }));
    return result.payload;
  };
  return createPostReply;
};
export const useGetCurrentUser = () => {
  const currentUser = useSelector((state) => state.auth?.userInfo);
  const localStorageUser = localStorage.getItem("user_data");
  if (localStorageUser) {
    return JSON.parse(localStorageUser);
  }
  return currentUser;
};
