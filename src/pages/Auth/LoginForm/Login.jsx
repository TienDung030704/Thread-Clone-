import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Instagram, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/util/validate";
import { useAutoLogin, useGetCurrentUser } from "@/features/Auth";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const {
    register: login, // Đổi tên register thành login
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const AutoLogin = useAutoLogin();
  const CurrentUser = useGetCurrentUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await AutoLogin(data);
      // Phần lưu access và refresh
      if (result.access_token && result.refresh_token) {
        localStorage.setItem("access_token", result.access_token);
        localStorage.setItem("refresh_token", result.refresh_token);
        //  Phần Lưu thông tin user
        if (result.user) {
          localStorage.setItem("user_data", JSON.stringify(result.user));
        }
        toast.success("Đăng nhập thành công!", {
          duration: 2000,
          position: "top-right",
        });

        // Delay chút để user thấy thông báo
        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-black font-medium text-xl">Đăng nhập</h1>
        {/* Email Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="email"
            {...login("login")}
            placeholder="Login"
          />
          {errors.login && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.login.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="password"
            {...login("password")}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button className="w-[336px] h-auto mt-8 bg-black text-white p-4">
          Đăng Nhập
        </Button>

        {/* Forgot Password */}
        <div className="w-[336px] mt-6 text-center">
          <Link to="/auth/forgot-password" className="text-gray-500 text-sm">
            Quên mật khẩu?
          </Link>
        </div>

        <div className="w-[336px] mt-4 text-center text-gray-400 text-sm">
          hoặc
        </div>

        {/* Instagram Login */}
        <Button className="w-[336px] h-auto mt-4 bg-white border border-gray-200 text-black p-4 flex items-center justify-between hover:bg-gray-50">
          <div className="flex items-center">
            <Instagram className="w-8 h-8 mr-3" style={{ color: "#E4405F" }} />
            <span>Tiếp tục bằng Instagram</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      {/* Sign Up Link */}
      <div className="mt-8 text-center text-sm">
        <span className="text-gray-500">Bạn chưa có tài khoản? </span>
        <Link to="/auth/register" className="text-blue-500 hover:underline">
          Đăng ký
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-400 space-x-4">
        <span>© 2025</span>
        <span>Điều khoản của Threads</span>
        <span>Chính sách quyền riêng tư</span>
        <span>Chính sách cookie</span>
        <span>Báo cáo sự cố</span>
      </div>
      <Toaster position="top-right" />
    </form>
  );
}
export default Login;
