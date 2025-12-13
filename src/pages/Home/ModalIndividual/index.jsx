import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetCurrentInformation } from "@/features/Post/postDetail/hook";
import { ChevronRight, Users } from "lucide-react";
import { useState } from "react";
function ModalIndividual() {
  const [instagramEnabled, setInstagramEnabled] = useState(true);
  const currentInformation = useGetCurrentInformation();
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Chỉnh sửa trang cá nhân
            </Button>
          </DialogTrigger>
          <DialogContent className=" sm:max-w-[630px] sm:max-h-[534px] overflow-y-auto [&>button]:hidden">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Chỉnh sửa trang cá nhân
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Tên */}
              <div className="space-y-2 border-b border-gray-300/73 pb-4">
                <Label className="text-sm font-medium text-black">Tên</Label>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="font-medium">
                      {currentInformation?.username || ""}
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Tiểu sử */}
              <div className="space-y-2 border-b border-gray-300/73 pb-4">
                <Label className="text-sm font-medium text-black">
                  Tiểu sử
                </Label>
                <div className="text-gray-500">03</div>
              </div>

              {/* Mối quan tâm */}
              <div className="space-y-2 border-b border-gray-300/73 pb-4">
                <Label className="text-sm font-medium text-black">
                  Mối quan tâm
                </Label>
                <div className="text-gray-400">Thêm mối quan tâm</div>
              </div>

              {/* Liên kết */}
              <div className="flex items-center justify-between py-2 border-b border-gray-300/73 pb-4">
                <Label className="text-sm font-medium text-black">
                  Liên kết
                </Label>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>

              {/* Podcast */}
              <div className="space-y-2 border-b border-gray-300/73 pb-4">
                <Label className="text-sm font-medium text-black">
                  Podcast
                </Label>
                <div className="text-gray-400">
                  + Liên kết đến podcast của bạn
                </div>
              </div>

              {/* Hiển thị biểu tượng Instagram */}
              <div className="flex items-center justify-between py-3 border-b border-gray-300/73 pb-4">
                <div>
                  <Label className="text-sm font-medium text-black">
                    Hiển thị biểu tượng Instagram
                  </Label>
                  <div className="text-xs text-gray-500 mt-1">
                    Khi bạn tắt, biểu tượng Threads trên trang cá nhân Instagram
                    cũng sẽ biến mất.
                  </div>
                </div>
                <button
                  onClick={() => setInstagramEnabled(!instagramEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    instagramEnabled ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      instagramEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Quyền riêng tư của trang cá nhân */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <Label className="text-sm font-medium text-black">
                    Quyền riêng tư của trang cá nhân
                  </Label>
                  <div className="text-xs text-gray-500 mt-1">Công khai</div>
                  <div className="text-xs text-gray-400 mt-1">
                    If you switch to private, only followers can see your
                    threads. Your replies will be visible to followers and
                    individual profiles you reply to.
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <DialogFooter className="flex flex-col gap-2">
              <DialogClose asChild>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-3">
                  Xong
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
export default ModalIndividual;
