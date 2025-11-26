import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { Clock, Search, SlidersHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAutoSearch } from "@/features/SearchFollow/hook";
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

function SearchLogin() {
  const [list, setList] = useState([]);
  const autoSearch = useAutoSearch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await autoSearch();
        if (result) {
          setList(result);
        }
      } catch (error) {
        setList([]);
        console.log("Loi", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header>
        <h1>Tìm kiếm</h1>
      </Header>
      <Sidebar />
      <PostCard>
        <div className="p-6">
          <div className="relative w-[590px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Tìm kiếm"
              className="pl-10 pr-12 py-2 w-full bg-gray-50 border-gray-200 rounded-full focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 rounded-full hover:bg-gray-200"
                >
                  <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-[16px] text-black font-bold mb-2">
                    Sau ngày
                    <DropdownMenuShortcut>
                      <Clock />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[16px] text-black font-bold mb-2">
                    Trước ngày
                    <DropdownMenuShortcut>
                      <Clock />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[16px] text-black font-bold mb-2">
                    Từ trang cá nhân
                    <DropdownMenuShortcut>
                      <User />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* ← THÊM LOADING LOGIC */}
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-3 text-gray-600">Đang tải...</span>
          </div>
        ) : (
          <ul>
            {list.map((item) => (
              <li
                className="w-full h-full px-3 py-6 border-t border-b"
                key={item.id}
              >
                <div className="flex items-center px-3">
                  <article className="flex items-center gap-3">
                    <img
                      className="w-9 h-9 object-cover rounded-full"
                      src={item.avatar_url}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-black font-medium">
                        {item.name}
                      </span>
                      <span className="text-gray-400">{item.username}</span>
                    </div>
                  </article>
                  <Button className="ml-auto">Theo dõi</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PostCard>
    </div>
  );
}
export default SearchLogin;
