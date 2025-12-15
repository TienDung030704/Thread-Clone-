import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function ModalUserFollow({ children }) {
  const [activeTab, setActiveTab] = useState("followers");

  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">{children}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] max-h-[600px] [&>button]:hidden">
            <DialogHeader className="pb-0">
              <div className="flex items-center border-b">
                <div className="flex space-x-8">
                  <button
                    className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === "followers"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("followers")}
                  >
                    Người theo dõi
                  </button>
                  <button
                    className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === "following"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("following")}
                  >
                    Đang theo dõi
                  </button>
                </div>
              </div>
            </DialogHeader>
            <div className="mt-6 overflow-y-auto max-h-[400px]">
              <div className="space-y-4">
                {/* Nội dung sẽ được thêm ở đây */}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
export default ModalUserFollow;
