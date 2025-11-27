import {
  authForgot,
  authLogin,
  authLogout,
  authRegister,
  authReset,
  authVerify,
} from "@/service/auth/authService";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// export const useAutoRegister = () => {
//   const dispatch = useDispatch();
//   // Return ve 1 funtion de componet goi khi can
//   const autoRegister = useCallback(
//     async (data) => {
//       const action = await dispatch(authRegister(data));
//       if (authRegister.fulfilled.match(action)) {
//         return action.payload;
//       }
//       throw action.payload || action.error;
//     },
//     [dispatch]
//   );
//   return autoRegister;
// };

// };
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

// Hàm selector state hiện tại
export const useGetCurrentUser = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return currentUser;
};
