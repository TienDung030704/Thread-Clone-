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
import { useCreateReply } from "@/features/Post/createReply/hook";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@radix-ui/themes";
import {
  ChevronRight,
  Images,
  ImagePlay,
  Smile,
  BookText,
  MapPinMinusInside,
  ArrowUpDown,
  EllipsisIcon,
} from "lucide-react";
import { useState } from "react";

function ReplyModal({
  children,
  postSingle,
  postCommentUser,
  userName,
  postReply,
}) {
  const [content, setContent] = useState("");
  const [replyPermission, setReplyPermission] = useState("everyone");
  const autoCreateReply = useCreateReply();

  const handleCreateReply = async (postId) => {
    try {
      const replyData = {
        content: content,
        reply_permission: replyPermission,
      };
      const result = await autoCreateReply({ postId, replyData });
      if (result) {
        toast.success("Đã tạo bình luận thành công");
        return result;
      }
    } catch (error) {
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
                <DialogTitle className="text-center">
                  Thread trả lời
                </DialogTitle>

                <div className="absolute right-0 flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <EllipsisIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </DialogHeader>

            <div className="border-b border-b-gray-300"></div>

            {/* HIỂN THỊ BÀI POST ĐƯỢC TRUYỀN TỪ CHA */}
            <div className="flex gap-3 mb-4">
              <img
                src={postSingle?.user?.avatar_url}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <b>{postSingle?.user?.username}</b>
                <p>{postSingle?.content}</p>
              </div>
            </div>
            {/* FORM TRẢ LỜI BÀI VIẾT */}
            <div>
              <div className="flex items-start gap-3">
                {/* AVATAR BÊN TRÁI */}
                <img
                  className="w-10 h-10 rounded-full object-cover  border-y"
                  src="avatarcanhan.jpg"
                  alt="Avatar"
                />

                {/* CONTENT BÊN PHẢI */}
                <div className="flex-1">
                  {/* username */}
                  <div className="flex items-center mb-2">
                    <span className="text-black font-medium">
                      {userName?.username}
                    </span>
                    <ChevronRight className="mx-2 text-gray-400 w-4 h-4" />
                    <input
                      className="border-none outline-none bg-transparent flex-1 text-gray-500 text-sm"
                      placeholder="Thêm chủ đề "
                    />
                  </div>

                  {/* NỘI DUNG NHẬP */}
                  <div className="mb-1">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="border-none outline-none bg-transparent w-full resize-none text-gray-900 placeholder-gray-400 text-sm"
                      placeholder={`Trả lời ${postCommentUser?.user?.username}`}
                      rows="1"
                    />
                  </div>

                  {/* TOOLBAR ICONS */}
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
                      <BookText className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="hover:bg-gray-100 rounded p-1">
                      <MapPinMinusInside className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* "Thêm vào thread" */}
              <div className="flex items-center gap-2 text-gray-400 ml-2">
                <img
                  className="w-4 h-4 rounded-full object-cover"
                  src="avatarcanhan.jpg"
                  alt=""
                />
                <span className="text-sm ml-5">Thêm vào thread</span>
              </div>
            </div>

            {/* FOOTER */}
            <DialogFooter className="flex justify-between ">
              <div className="flex items-center flex-1 cursor-pointer">
                <ArrowUpDown className="w-4 h-4 cursor-pointer mr-2 " />
                <Button
                  className="border-none !text-gray-400 "
                  variant="outline"
                >
                  Các lựa chọn để kiểm soát câu trả lời
                </Button>
              </div>
              <Button
                onClick={() => handleCreateReply(postReply?.id)}
                type="submit"
              >
                Đăng
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default ReplyModal;
