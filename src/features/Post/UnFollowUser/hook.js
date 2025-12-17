import { unFollowUserService } from "@/service/UnfollowUser/UnFollowUser";
import { useDispatch, useSelector } from "react-redux";
// Hàm dispatch SavePost
export const useUnFollowUser = () => {
  const dispatch = useDispatch();
  const unFollowUser = async (userId) => {
    const result = await dispatch(unFollowUserService(userId));
    console.log("user", result);
    return result.payload;
  };
  return unFollowUser;
};
export const useGetCurrentFollowUser = () => {
  const currentFollowUser = useSelector(
    (state) => state.list.currentUnFollowUser
  );
  console.log("currentFollowUser:", currentUnFollowUser);
  return currentFollowUser;
};
