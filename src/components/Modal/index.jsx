import {
  Heart,
  House,
  Menu,
  Plus,
  Search,
  User,
  ArrowUpDown,
  MessageSquare,
  MoreHorizontal,
  ArrowBigRight,
  ChevronRight,
  Images,
  ImagePlay,
  Smile,
  BookText,
  Ellipsis,
  MapPinMinusInside,
  NotepadTextDashed,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAutoLogout } from "@/features/Auth";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
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
import { useCreatePost } from "@/features/Post/createPost/hook";
function Modal({ children, userAuth }) {
  const [content, setContent] = useState("");
  const [topicName, setTopicName] = useState("");
  const [replyPermission, setReplyPermission] = useState("everyone");
  const [requiresApproval, setRequiresApproval] = useState(false);
  const autoCreatePost = useCreatePost();
  // 
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        content: content,
        topic_name: topicName,
        reply_permission: replyPermission,
        requires_reply_approval: requiresApproval,
      };
      const result = await autoCreatePost(postData);

      if (result) {
        toast.success("Đã tạo bài viết thành công");
        return result.postData;
      }
    } catch (error) {
      toast.error("Có lỗi khi tạo bài viết");
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[620px]">
            <DialogHeader>
              <div className="flex items-center justify-center w-full relative">
                {/* Center - Title */}
                <DialogTitle className="text-center">Thread mới</DialogTitle>
                {/* Right side - Icons (absolute positioning) */}
                <div className="absolute right-0 flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <NotepadTextDashed className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </DialogHeader>
            <div className=" border-b border-b-gray-300"></div>
            <div className="">
              <div className="flex items-start gap-3">
                {/* AVATAR BÊN TRÁI */}
                <img
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-y"
                  src="avatarcanhan.jpg"
                  alt="Avatar"
                />

                {/* CONTENT BÊN PHẢI */}
                <div className="flex-1">
                  {/* USERNAME VÀ CHỦ ĐỀ */}
                  <div className="flex items-center mb-2">
                    <span className="text-black font-medium">
                      {userAuth?.username || "guest"}
                    </span>
                    <ChevronRight className="mx-2 text-gray-400 w-4 h-4" />
                    <input
                      value={topicName}
                      onChange={(e) => setTopicName(e.target.value)}
                      className="border-none outline-none bg-transparent flex-1 text-gray-500 text-sm"
                      placeholder="Thêm chủ đề"
                    />
                  </div>

                  {/* NỘI DUNG CHÍNH */}
                  <div className="mb-1">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="border-none outline-none bg-transparent w-full resize-none text-gray-900 placeholder-gray-400 text-sm"
                      placeholder="Có gì mới?"
                      rows="1"
                    />
                  </div>

                  {/* ICONS TOOLBAR - INLINE */}
                  <div className="flex gap-4 mb-4">
                    <button className="hover:bg-gray-100 rounded p-1">
                      <Images className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <ImagePlay className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <Smile className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <Ellipsis className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <BookText className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <MapPinMinusInside className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* THÊM VÀO THREAD - RIÊNG BIỆT */}
              <div className="flex items-center gap-2 text-gray-400  ml-2">
                <img
                  className="w-4 h-4 rounded-full object-cover"
                  src="avatarcanhan.jpg"
                  alt=""
                />
                <span className="text-sm ml-5">Thêm vào thread</span>
              </div>
            </div>
            <DialogFooter className="flex justify-between ">
              <div className="flex items-center flex-1">
                <ArrowUpDown className="w-4 h-4 cursor-pointer" />
                <Button
                  className="border-none  text-gray-400 "
                  variant="outline"
                >
                  Các lựa chọn để kiểm soát câu trả lời
                </Button>
              </div>
              <Button onClick={handleCreatePost} type="submit">
                Đăng
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
export default Modal;
