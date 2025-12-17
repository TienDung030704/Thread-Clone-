import { followUserService } from "@/service/FollowUser/followUser";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch FollowUser
export const useFollowUser = () => {
  const dispatch = useDispatch();
  const followUser = async (userId) => {
    const result = await dispatch(followUserService(userId));
    console.log("user", result);
    return result.payload;
  };
  return followUser;
};
export const useGetCurrentFollowUser = () => {
  const currentFollowUser = useSelector(
    (state) => state.list.currentFollowUser
  );
  console.log("currentFollowUser:", currentFollowUser);
  return currentFollowUser;
};
