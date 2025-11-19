import { authRegister } from "@/service/auth/authService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFetchCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRegister());
  }, [dispatch]);
};

export const useCurrentUser = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return currentUser;
};
