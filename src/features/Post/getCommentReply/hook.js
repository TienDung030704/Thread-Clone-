import { commentReplyService } from "@/service/ReplyComment/ReplyCommentService";
import { useDispatch, useSelector } from "react-redux";

export const useAutoReplyComment = () => {
  const dispatch = useDispatch();
  const replyComment = async ({ postId, page }) => {
    const result = await dispatch(commentReplyService({ postId, page }));
    return result.payload;
  };
  return replyComment;
};
// Tạo hook lấy data từ Redux store
export const useGetReplyComments = () => {
  const comments = useSelector((state) => state.comment.currentComment);
  console.log(comments);
  return comments;
};
