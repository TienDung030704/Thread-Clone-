import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/util/validate";
import { useCurrentUser } from "@/features/Auth";
// import * as authService from "@/service/auth/authService";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const CurrentUser = useCurrentUser();
  const onSubmit = async (data) => {
    try {
    } catch {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-black font-medium text-xl">Đăng ký</h1>

        {/* Username Field */}
        <div className="w-[336px] mt-7">
          <Input
            className="w-full h-auto p-4"
            type="text"
            {...register("username")}
            placeholder="Tên người dùng"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="email"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="password"
            {...register("password_confirmation")}
            placeholder="Confirm Password"
          />
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          onSubmit={onSubmit}
          className="w-[336px] h-auto mt-8 bg-black text-white p-4"
        >
          Đăng Ký
        </Button>
      </div>

      {/* Text quay lại đăng nhập */}
      <div className="text-center mt-6 mb-4">
        <p className="text-gray-600 text-sm">
          Đã có tài khoản?{" "}
          <Link
            to="/auth/login"
            className="text-black font-medium hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-400 space-x-4">
        <span>© 2025</span>
        <span>Threads Terms</span>
        <span>Privacy Policy</span>
        <span>Cookies Policy</span>
        <span>Report a problem</span>
      </div>
    </form>
  );
}
import { useCurrentUser } from "@/features/Auth";
export default Register;
// const { access_token } = await authService.authRegister(data);
// console.log(access_token);
// if (access_token) {
//   localStorage.setItem("token", access_token);
//   navigate("/auth/login");
// }
