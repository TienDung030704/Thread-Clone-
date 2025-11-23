import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

function SearchNotLogin() {
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
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 rounded-full hover:bg-gray-200"
            >
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>
      </PostCard>
      <LoginPanel />
    </div>
  );
}
export default SearchNotLogin;
