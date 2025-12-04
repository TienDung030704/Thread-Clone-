import { ChevronRight, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ModalNotLogin({ children }) {
  const handleInstagramSignup = () => {
    // Xử lý đăng nhập Instagram
    console.log("Đăng nhập Instagram");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] rounded-3xl p-8 border-0 shadow-2xl">
          <DialogHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <DialogTitle className="text-3xl font-bold text-center text-black">
              Đăng ký để đăng
            </DialogTitle>

            {/* Description */}
            <DialogDescription className="text-center w-[336px] mx-auto text-gray-600 text-base leading-relaxed">
              Tham gia Threads để chia sẻ ý tưởng, đặt câu hỏi, đăng những suy
              nghĩ bất chợt và hơn thế nữa.
            </DialogDescription>
          </DialogHeader>

          <div className="py-8">
            {/* Instagram Sign Up Button */}
            <button
              onClick={handleInstagramSignup}
              className="w-full flex items-center gap-4 p-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition duration-200"
            >
              {/* Instagram Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500  rounded-lg flex items-center justify-center flex-shrink-0">
                <Instagram />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">
                  Tiếp tục bằng Instagram
                </p>
                <p className="text-sm text-gray-600 mt-1">tiendungg_07</p>
              </div>

              {/* Chevron */}
              <ChevronRight className="text-gray-400 w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalNotLogin;
