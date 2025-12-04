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
import LoginPanel from "@/components/LoginPanel";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useFetchProduct, useProductList } from "@/features/product/hook";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "@/components/Modal";
import SidebarNotLogin from "@/components/SidebarNotLogin/Sidebar";
function HomeNotLogin() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const autoProduct = useProductList();
  const autoFetch = useFetchProduct();

  // UseEffect render ra dữ liệu bài post
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await autoProduct();
        if (result) {
          console.log(result);
          setList(result);
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
      const result = await autoFetch(page); // page từ Redux store
      if (result && result.length > 0) {
        setList((prevList) => [...prevList, ...result]);
        setPage(page + 1);
        setHasMore(true);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  };

  return (
    <div>
      {/* Đã đăng nhập template */}
      <div className="login">
        <Header>
          <div className="flex items-center gap-2">
            Trang chủ
            <DropdownMenu>
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
        <SidebarNotLogin />
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
              <ul className="flex flex-col justify-center items-center">
                {list.map((item) => (
                  <li
                    className="w-full h-full px-3 py-6 border-t border-b"
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
                            <DropdownMenu>
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
                                  <DropdownMenuItem className="text-[15px] font-medium text-black p-2">
                                    Lưu
                                    <DropdownMenuShortcut>
                                      <Bookmark />
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
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          )}
        </PostCard>
        <LoginPanel />
      </div>
    </div>
  );
}
export default HomeNotLogin;
