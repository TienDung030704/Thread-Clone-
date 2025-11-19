import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Tối thiểu là 2 kí tự"),
  email: string().required("Email là bắt buộc").email("Sai định dạng email"),
  password: string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
  password_confirmation: string().oneOf([ref("password")], "Mật khẩu kh khớp"),
});
export const loginSchema = object({
  email: string().required("Email là bắt buộc").email("Sai định dạng email"),
  password: string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
});

export const forgotSchema = object({
  email: string().required("Email là bắt buộc").email("Sai định dạng email"),
});
