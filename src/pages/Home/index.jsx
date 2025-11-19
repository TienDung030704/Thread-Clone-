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
import { useEffect, useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://threads.f8team.dev/api/posts/feed")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data.data);
        setList(data.data);
      });
  }, []);

  return (
    <div>
      <Header>
        <h1>Trang chủ</h1>
      </Header>
      <Sidebar />
      <PostCard>
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <p className="text-gray-500">
              <LoaderIcon />
            </p>
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
                        {item.updated_at}
                      </span>
                      <button className="ml-auto relative">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="border-none" variant="outline">
                              <Ellipsis className="cursor-pointer" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuGroup>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="text-lg font-medium text-black">
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
                              <DropdownMenuItem className="font-medium text-black text-lg">
                                Lưu
                                <DropdownMenuShortcut>
                                  <Bookmark />
                                </DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="font-medium text-black text-lg">
                                Không quan tâm
                                <DropdownMenuShortcut>
                                  <Users />
                                </DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-lg font-medium text-black">
                              Tắt thông báo
                              <DropdownMenuShortcut>
                                <Volume2 />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-lg font-medium text-black">
                              Hạn chế
                              <DropdownMenuShortcut>
                                <LinkIcon />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-lg font-medium text-black">
                              Chặn
                              <DropdownMenuShortcut>
                                <LockKeyhole />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-lg font-medium text-black">
                              Báo cáo
                              <DropdownMenuShortcut>
                                <AlertCircle />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
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
  );
}

export default Home;
