import { Heart, MessageCircle, Share, Repeat2, Link, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoRePost, useLikePost } from "@/features/Post/hook";
import { useState } from "react";
import ReplyModal from "@/components/posts/ReplyModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function InteractionBar({
  likes = 0,
  comments = 0,
  shares = 0,
  reposts = 0,
  postId,
  userHasLiked = false,
  userHasRepost = false,
  post,
  contentCommentUser,
  userAuthName,
}) {
  const autoLike = useLikePost();
  const [likeCount, setlikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(userHasLiked);
  const [repostCount, setRepostCount] = useState(reposts);
  const [isReposted, setIsReposted] = useState(userHasRepost);
  const autoRepost = useAutoRePost(postId);
  const handleLike = async (postId) => {
    try {
      if (!isLiked) {
        setlikeCount(likeCount + 1);
        setIsLiked(true);
        await autoLike(postId);
      } else {
        setlikeCount(likeCount - 1);
        setIsLiked(false);
        await autoLike(postId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRepost = async (postId) => {
    try {
      if (!isReposted) {
        setRepostCount(repostCount + 1);
        setIsReposted(true);
        await autoRepost(postId);
      } else {
        setRepostCount(repostCount - 1);
        setIsReposted(false);
        await autoRepost(postId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    toast.success("Đã copy link vào clipboard!", {
      duration: 2000,
      position: "bottom-center",
    });
  };
  const postUrl = `${window.location.origin}/post/${postId}`;
  const Interactions = [
    {
      icon: Heart,
      count: likeCount,
      action: () => handleLike(postId),
      key: "like",
    },
    { icon: MessageCircle, count: comments, action: null, key: "comment" },
    {
      icon: Repeat2,
      count: repostCount,
      action: () => handleRepost(postId),
      key: "repost",
    },
    { icon: Share, count: shares, action: null, key: "share" }, // Share action null vì dropdown sẽ xử lý
  ];

  return (
    <div className="flex gap-4 mt-3">
      {Interactions.map((item, index) => {
        const Icon = item.icon;

        // Tạo nút bấm chung
        const ActionButton = (
          <Button
            onClick={item.action ? item.action : undefined}
            className="border-none p-2 h-auto rounded-full hover:bg-gray-100"
            variant="ghost" // Đổi thành ghost hoặc giữ border-none tùy theme
          >
            <Icon
              className={`w-5 h-5 ${
                index === 0 && isLiked
                  ? "text-red-600 fill-red-600"
                  : index === 2 && isReposted
                  ? "text-blue-700 fill-blue-600"
                  : "text-gray-700"
              }`}
            />
          </Button>
        );

        return (
          <div key={index} className="flex items-center gap-1">
            {item.key === "comment" ? (
              // 1. Trường hợp Comment
              <ReplyModal
                postSingle={post}
                postCommentUser={contentCommentUser}
                userName={userAuthName}
              >
                {ActionButton}
              </ReplyModal>
            ) : item.key === "share" ? (
              // 2. Trường hợp Share (SỬA Ở ĐÂY)
              <DropdownMenu modal={false}>
                {/* asChild giúp Trigger nhận diện ActionButton là phần tử kích hoạt */}
                <DropdownMenuTrigger>{ActionButton}</DropdownMenuTrigger>

                <DropdownMenuContent align="start">
                  <CopyToClipboard text={postUrl} onCopy={handleCopy}>
                    <DropdownMenuItem className="font-medium text-[16px]">
                      <Link className="mr-2 h-4 w-4 " />
                      Sao chép liên kết
                    </DropdownMenuItem>
                  </CopyToClipboard>
                  <DropdownMenuItem
                    className="font-medium text-[16px]"
                    onClick={() => console.log("Send via DM")}
                  >
                    <Send className="mr-2 h-4 w-4" /> Sao chép dưới hạng hình
                    ảnh
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="font-medium text-[16px]"
                    onClick={() => console.log("Send via DM")}
                  >
                    <Link className="mr-2 h-4 w-4" /> Lấy mã nhúng ảnh
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // 3. Trường hợp Like, Repost (Nút thường)
              ActionButton
            )}

            {item.count >= 0 && (
              <span className="text-sm text-gray-600">{item.count}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InteractionBar;
