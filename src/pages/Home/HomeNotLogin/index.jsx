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
import { useProductList } from "@/features/product/hook";
import { useEffect, useState } from "react";
function HomeNotLogin() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const autoProduct = useProductList();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await autoProduct();
        if (result) {
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
  return (
    <div>
      {/* Chưa đăng nhập template */}
      <div className="notlogin">
        <Header>
          <h1>Trang chủ</h1>
        </Header>
        <Sidebar />
        <PostCard>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <span className="ml-3 text-gray-600">Đang tải...</span>
            </div>
          ) : (
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
                              <Button className="border-none" variant="outline">
                                <Ellipsis className="cursor-pointer" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                              <DropdownMenuItem className="text-lg font-medium text-black">
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
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </PostCard>
        <LoginPanel />
      </div>
    </div>
  );
}
export default HomeNotLogin;
