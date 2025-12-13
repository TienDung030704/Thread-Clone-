import {
  Heart,
  MessageCircle,
  Share,
  ArrowDown,
  Repeat2,
  Ellipsis,
  ChevronRight,
  Bookmark,
  Volume2,
  Users,
  AlertCircle,
  LockKeyhole,
  Link as LinkIcon,
  BadgePlus,
  MoveLeft,
  ChevronDown,
  LoaderIcon,
  Plus,
  TicketCheck,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import InteractionBar from "@/components/posts/InteractionBar";
import Header from "@/components/Header";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useFetchProduct, useProductList } from "@/features/product/hook";
import Modal from "@/components/Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSavePost } from "@/features/Post/savePost/hook";
import toast, { Toaster } from "react-hot-toast";
import { useGetCurrentUser } from "@/features/Auth";
import { useAutoPostDetail } from "@/features/Post/postDetail/hook";
import { useNavigate } from "react-router-dom";
function HomeLogin() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const autoProduct = useProductList();
  const autoFetch = useFetchProduct();
  const autoSave = useSavePost();
  const currentUser = useGetCurrentUser();
  const currentPostDetail = useAutoPostDetail();
  // UseEffect render ra dữ liệu bài post
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await autoProduct();
        if (result && result.length > 0) {
          setList(result);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setList([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch thêm data cho infinite scroll
  const fetchMoreData = async () => {
    try {
      const result = await autoFetch(page);
      if (result && result.length > 0) {
        setList((prevList) => [...prevList, ...result]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  };
  // ham bam luu bai viet
  const handleSaveClick = async (postId) => {
    try {
      const result = await autoSave(postId);
      // Tìm bài post để check trạng thái hiện tại
      const currentPost = list.find((item) => item.id === postId);
      if (result) {
        // Cập nhật state list để UI thay đổi ngay lập tức
        setList((prevList) =>
          prevList.map((item) =>
            item.id === postId
              ? { ...item, is_saved_by_auth: !item.is_saved_by_auth }
              : item
          )
        );
        if (!currentPost.is_saved_by_auth) {
          toast.success("Đã lưu bài viết thành công!");
          return result;
        } else {
          toast.success("Đã bỏ lưu bài viết ");
          return result;
        }
      }
    } catch (error) {
      toast.error("Có lỗi khi lưu bài viết ");
      console.log(error);
    }
  };
  // ham bấm vào chi tiết từng bài post
  const handleCurrentPostDetail = async (postId) => {
    try {
      const result = await currentPostDetail(postId);
      navigate(`/posts/${postId}`);
      if (result) {
        return result;
      }
    } catch (error) {
      toast.error("Có lỗi khi bấm vào bài viết chi tiết");
    }
  };
  return (
    <div>
      {/* Đã đăng nhập template */}
      <div className="login">
        <Header>
          <div className="flex items-center gap-2">
            Dành cho bạn
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-2xl mb-3 font-bold">
                    Bảng Feed
                    <DropdownMenuShortcut>
                      <Plus />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-medium  text-black font-bold mb-3">
                    Dành cho bạn
                    <DropdownMenuShortcut>
                      <TicketCheck />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-medium  text-black font-bold mb-3">
                    Đang theo dõi
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-medium  text-black font-bold mb-3">
                    Bài viết tự hủy
                    <DropdownMenuShortcut>
                      <Trash />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Header>
        <Sidebar />
        <PostCard>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <span className="ml-3 text-gray-600">Đang tải...</span>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={list.length}
              next={fetchMoreData} // ← Function load thêm
              hasMore={hasMore} // ← State kiểm tra còn data
              loader={
                <div className="flex items-center justify-center p-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                  <span className="ml-2">Đang tải thêm...</span>
                </div>
              }
              endMessage={
                <p className="text-center p-4 text-gray-500">
                  Đã xem hết bài viết!
                </p>
              }
            >
              {/* Có gì mới  */}
              <div className="w-full border-b border-gray-200 p-4 bg-white">
                <div className="flex items-center gap-3">
                  <img
                    className="w-9 h-9 object-cover rounded-lg"
                    src="avatarcanhan.jpg"
                    alt=""
                  />
                  <Modal userAuth={currentUser}>
                    <input
                      type="text"
                      placeholder="Có gì mới?"
                      className="flex-1 bg-transparent text-gray-500 placeholder-gray-400 outline-none"
                    />
                  </Modal>
                  <Modal userAuth={currentUser}>
                    <Button className="px-4 py-2 bg-gray-100 hover:bg-black text-gray-700 hover:text-white text-sm rounded-lg ml-70 transition-colors">
                      Đăng
                    </Button>
                  </Modal>
                </div>
              </div>
              <ul className="flex flex-col justify-center items-center">
                {list.map((item) => (
                  <li
                    onClick={() => handleCurrentPostDetail(item.id)}
                    className="w-full h-full px-3 py-6 border-t border-b cursor-pointer"
                    key={item.id}
                  >
                    <div className="flex justify-center items-center gap-2.5">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={item.user.avatar_url}
                        alt=""
                      />
                      <div className="flex flex-col flex-1">
                        <article className="flex items-center">
                          <span className="text-black font-medium">
                            {item.user.username}
                          </span>
                          <span className="ml-1.5 text-gray-500">
                            {new Date(item.updated_at).toLocaleString("vi-VN")}
                          </span>
                          <button className="ml-auto relative">
                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  className="border-none"
                                  variant="outline"
                                >
                                  <Ellipsis className="cursor-pointer" />
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
                                  <DropdownMenuItem
                                    onClick={() => handleSaveClick(item.id)}
                                    className="text-[15px] font-medium text-black p-2"
                                  >
                                    {item.is_saved_by_auth ? "Bỏ lưu" : "Lưu"}

                                    <DropdownMenuShortcut>
                                      <Bookmark
                                        className={
                                          item.is_saved_by_auth
                                            ? " fill-red-600 text-red-600 "
                                            : ""
                                        }
                                      />
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
                          </button>
                        </article>
                        <span className="">{item.content}</span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="max-h-96 w-auto object-cover rounded-md mt-2 ml-10"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-5 pt-2">
                      <InteractionBar
                        likes={item.likes_count}
                        comments={item.replies_count}
                        shares={item.shares}
                        reposts={item.reposts_and_quotes_count}
                        postId={item.id}
                        userHasLiked={item.is_liked_by_auth}
                        userHasRepost={item.is_reposted_by_auth}
                        post={item}
                        contentCommentUser={item}
                        userAuthName={currentUser}
                        postReply={item}
                        postDetail={item}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          )}
        </PostCard>
      </div>
      <Toaster />
      {/* Nút dấu cộng ở góc dưới bên phải */}
      <button className="fixed bottom-6 right-6 w-20 h-20 bg-white hover:bg-gray-50 text-black rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center z-50 border border-gray-200">
        <Plus className="w-7 h-7" />
      </button>
    </div>
  );
}
export default HomeLogin;
