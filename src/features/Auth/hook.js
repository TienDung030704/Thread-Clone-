import {
  authForgot,
  authLogin,
  authLogout,
  authRegister,
  authReset,
  authVerify,
} from "@/service/auth/authService";
import { useDispatch, useSelector } from "react-redux";
// Ham dispatch de dispatch toi API register
export const useAutoRegister = () => {
  const dispatch = useDispatch();
  const register = async (data) => {
    const result = await dispatch(authRegister(data));
    return result.payload;
  };
  return register;
};
// Ham dispatch de dispatch toi API login
export const useAutoLogin = () => {
  const dispatch = useDispatch();

  const login = async (data) => {
    const result = await dispatch(authLogin(data));
    return result.payload;
  };
  return login;
};
// Ham dispatch de dispatch toi API logout
export const useAutoLogout = () => {
  const dispatch = useDispatch();
  const logout = async (data) => {
    const result = await dispatch(authLogout(data));
    return result.payload;
  };
  return logout;
};

// Ham dispatch de dispatch toi API forgot
export const useAutoForgot = () => {
  const dispatch = useDispatch();
  const forgot = async (data) => {
    const result = await dispatch(authForgot(data));
    return result.payload;
  };
  return forgot;
};

// Ham dispatch de dispatch toi API verifypassword
export const useAutoVerify = () => {
  const dispatch = useDispatch();
  const verify = async (data) => {
    const result = await dispatch(authVerify(data));
    return result.payload;
  };
  return verify;
};
// Ham dispatch de dispatch toi API resetpassword
export const useAutoResetPassword = () => {
  const dispatch = useDispatch();
  const resetpassword = async () => {
    const result = await dispatch(authReset(data));
    return result.payload;
  };
  return resetpassword;
};

export const useGetCurrentUser = () => {
  const currentUser = useSelector((state) => state.auth?.userInfo);
  const localStorageUser = localStorage.getItem("user_data");
  if (localStorageUser) {
    return JSON.parse(localStorageUser);
  }
  return currentUser;
};
