import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotSchema } from "@/util/validate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAutoForgot } from "@/features/Auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

function ForgotPassword() {
  const {
    register: forgotpassword, // Đổi tên register thành login
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotSchema),
  });
  const navigate = useNavigate();
  const currentForgot = useAutoForgot();
  const onSubmit = async (data) => {
    try {
      const result = await currentForgot(data);
      if (data.email) {
        toast.success("Đặt lại mật khẩu thành công!", {
          duration: 2000,
          position: "top-right",
        });
        console.log(data);
        return result;
      }
      navigate("/auth/reset-password");
    } catch (error) {
      throw error;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-black font-medium text-xl">Quên mật khâu</h1>
        {/* Email Field */}
        <div className="w-[336px] mt-4">
          <Input
            className="w-full h-auto p-4"
            type="email"
            {...forgotpassword("email")}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.email.message}
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
export default ForgotPassword;
