import Header from "@/components/Header";
import InteractionBar from "@/components/posts/InteractionBar";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  useAutoPostDetail,
  useGetCurrentInformation,
} from "@/features/Post/postDetail/hook";
import {
  AlertCircle,
  ArrowLeft,
  BadgePlus,
  Ellipsis,
  LinkIcon,
  LockKeyhole,
  MoveLeft,
  Users,
  Volume2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAutoReplyComment } from "@/features/Post/getCommentReply/hook";
import { useGetCurrentUser } from "@/features/Auth";
function PostDetails() {
  const [post, setPost] = useState({});
  const [replyComment, setreplyComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const autoReplyComment = useAutoReplyComment();
  const param = useParams();
  const autoProduct = useAutoPostDetail();
  const currentPost = useGetCurrentInformation();
  const postId = param.postId;
  const currentUser = useGetCurrentUser();

  // UseEffect render ra dữ liệu bài post
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await autoProduct(postId);
        if (result) {
          console.log("in ra", result);
          setPost(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // HÀM RENDER RA DANH SÁCH COMMENT CỦA POST
  useEffect(() => {
    const fetchRepLyComment = async () => {
      try {
        const result = await autoReplyComment({ postId, page });
        console.log("Dữ liệu comment trả về:", result);
        if (result) {
          setPage((prevPage) => prevPage + 1);
          setreplyComment(result);
          setLoading(true);
          return result;
        }
      } catch (error) {
        console.error("Lỗi lấy bài viết:", error);
      }
    };
    fetchRepLyComment();
  }, [postId]);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center ">
          <div className="">
            <Button className="border-none p-2 h-auto " variant="outline">
              <ArrowLeft className="cursor-pointer w-5 h-5" />
            </Button>
          </div>
          <div className="">
            <Header>Thread</Header>
          </div>
        </div>

        <Sidebar />
        <PostCard>
          <div className="p-4">
            <div className="flex gap-3">
              <img
                src={currentPost?.user?.avatar_url}
                alt="Avatar"
                className="w-8 h-8 rounded-full mt-2"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black">
                      {currentPost?.user?.username}
                    </span>
                    <span className="text-gray-500 text-sm">8 giờ</span>
                  </div>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="border-none p-2 h-auto"
                        variant="outline"
                      >
                        <Ellipsis className="cursor-pointer w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="text-[15px] font-medium text-black p-2">
                            Thêm vào bảng tin
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>
                                Thêm vào bảng feed
                                <DropdownMenuShortcut>
                                  <MoveLeft />
                                </DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Tạo bảng feed mới
                                <DropdownMenuShortcut>
                                  <BadgePlus />
                                </DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Tạo bảng feed mới
                          <DropdownMenuShortcut>
                            <BadgePlus />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                          Không quan tâm
                          <DropdownMenuShortcut>
                            <Users />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                        Tắt thông báo
                        <DropdownMenuShortcut>
                          <Volume2 />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                        Hạn chế
                        <DropdownMenuShortcut>
                          <LinkIcon />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                        Chặn
                        <DropdownMenuShortcut>
                          <LockKeyhole />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                        Báo cáo
                        <DropdownMenuShortcut>
                          <AlertCircle />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                        Sao chép liên kết
                        <DropdownMenuShortcut>
                          <LinkIcon />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mb-3">
                  <p className="text-black font-normal mb-2 text-lg leading-relaxed">
                    {currentPost?.content}
                  </p>
                </div>
                <InteractionBar
                  likes={currentPost?.likes_count}
                  comments={currentPost?.replies_count}
                  shares={currentPost?.shares_count}
                  reposts={currentPost?.reposts_and_quotes_count}
                  post={currentPost}
                  contentCommentUser={currentPost}
                  userAuthName={currentUser}
                  postReply={currentPost}
                  postDetail={currentPost}
                  postId={currentPost?.id}
                  userHasLiked={currentPost?.is_liked_by_auth}
                  userHasRepost={currentPost?.is_reposted_by_auth}
                />
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <span className="text-black font-bold">Hàng đầu</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                      <span>Xem hoạt động</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    {replyComment.map((comment) => (
                      <li key={comment.id} className="mb-4 mt-3">
                        <div className="flex gap-3">
                          <img
                            src={comment?.user?.avatar_url}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-black text-sm">
                                  {comment?.user?.username}
                                </span>
                                <span className="text-gray-500 text-xs">
                                  {new Date(comment.created_at).toLocaleString(
                                    "vi-VN"
                                  )}
                                </span>
                              </div>
                              <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    className="border-none p-1 h-auto"
                                    variant="outline"
                                  >
                                    <Ellipsis className="cursor-pointer w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  className="w-56"
                                  align="start"
                                >
                                  <DropdownMenuGroup>
                                    <DropdownMenuSub>
                                      <DropdownMenuSubTrigger className="text-[15px] font-medium text-black p-2">
                                        Thêm vào bảng tin
                                      </DropdownMenuSubTrigger>
                                      <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                          <DropdownMenuItem>
                                            Thêm vào bảng feed
                                            <DropdownMenuShortcut>
                                              <MoveLeft />
                                            </DropdownMenuShortcut>
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            Tạo bảng feed mới
                                            <DropdownMenuShortcut>
                                              <BadgePlus />
                                            </DropdownMenuShortcut>
                                          </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                      </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                  </DropdownMenuGroup>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                      Tạo bảng feed mới
                                      <DropdownMenuShortcut>
                                        <BadgePlus />
                                      </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                      Không quan tâm
                                      <DropdownMenuShortcut>
                                        <Users />
                                      </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                  </DropdownMenuGroup>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Tắt thông báo
                                    <DropdownMenuShortcut>
                                      <Volume2 />
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Hạn chế
                                    <DropdownMenuShortcut>
                                      <LinkIcon />
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Chặn
                                    <DropdownMenuShortcut>
                                      <LockKeyhole />
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Báo cáo
                                    <DropdownMenuShortcut>
                                      <AlertCircle />
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Sao chép liên kết
                                    <DropdownMenuShortcut>
                                      <LinkIcon />
                                    </DropdownMenuShortcut>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <p className="text-black text-sm leading-relaxed">
                              {comment?.content}
                            </p>
                            <InteractionBar
                              likes={comment?.likes_count}
                              comments={comment?.replies_count}
                              shares={comment?.shares_count}
                              reposts={comment?.reposts_and_quotes_count}
                              postId={comment?.id}
                              userHasLiked={comment?.is_liked_by_auth}
                              userHasRepost={comment?.is_reposted_by_auth}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PostCard>
      </div>
    </div>
  );
}
export default PostDetails;
