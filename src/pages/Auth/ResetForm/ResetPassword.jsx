import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAutoRegister } from "@/features/Auth";
import { resetSchema } from "@/util/validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

function ResetPassword() {
  const {
    register: reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(resetSchema),
  });

  const navigate = useNavigate();
  const resetPass = useAutoRegister();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("access_token", access_token);
      const result = await resetPass(data);
      if (result) {
        console.log("thanh cong ");
        return token;
      }
      navigate("auth/reset-password");
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-black font-medium text-xl">Đặt lại mật khẩu</h1>
        {/* Password Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="password"
            {...reset("password")}
            placeholder="Mật khẩu mới"
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
            {...reset("password_confirmation")}
            placeholder="Xác thực mật khẩu mới"
          />
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>
        {/* Submit Button */}
        <Button className="w-[336px] h-auto mt-8 bg-black text-white p-4">
          Đặt lại mật khẩu
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-400 space-x-4">
        <span>© 2025</span>
        <span>Điều khoản của Threads</span>
        <span>Chính sách quyền riêng tư</span>
        <span>Chính sách cookie</span>
        <span>Báo cáo sự cố</span>
      </div>
      <Toaster />
    </form>
  );
}
export default ResetPassword;
