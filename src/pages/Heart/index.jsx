import Header from "@/components/Header";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
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

function HeartPage() {
  return (
    <div>
      <div>
        <Sidebar />
        <Header>
          <div className="flex items-center gap-2">
            <h1>Hoạt động</h1>
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
        <PostCard />
      </div>
    </div>
  );
}
export default HeartPage;
