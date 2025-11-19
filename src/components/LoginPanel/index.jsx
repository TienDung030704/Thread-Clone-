import Login from "@/pages/Auth/LoginForm/Login";
import { Link } from "react-router";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
function LoginPanel() {
  return (
    <div className="w-72 h-65 bg-gray-100 rounded-2xl fixed top-13 right-30 px-6 max-xl:hidden  ">
      <div>
        <h1 className="font-bold text-black text-center mt-5">
          Đăng nhập hoặc đăng ký Threads
        </h1>
        <p className=" text-gray-500 text-center mt-2">
          Xem mọi người đang nói về điều gì và tham gia cuộc trò chuyện.
        </p>
        <button className="cursor-pointer">
          <div className="  mt-4 p-5 gap-4 bg-white rounded-2xl flex items-center">
            <Instagram />
            <button className="font-bold text-black text-[14px] whitespace-nowrap">
              Tiếp tục bằng Instagram
            </button>
          </div>
        </button>
        <button className="text-gray-500 text-center mt-5">
          <Link
            to="/auth/login"
            className="cursor-pointer hover:text-gray-700 transition-colors"
          >
            Đăng nhập bằng tên người dùng
          </Link>
        </button>
      </div>
    </div>
  );
}
export default LoginPanel;
