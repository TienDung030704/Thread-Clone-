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
import { useEffect, useState } from "react";
import HomeLogin from "./HomeLogin";
import HomeNotLogin from "./HomeNotLogin";

function Home() {
  const [isLoginIn, setisLoginIn] = useState(false);
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");
  useEffect(() => {
    if (access_token && refresh_token) {
      setisLoginIn(true);
    } else {
      setisLoginIn(false);
    }
  }, []);
  return (
    <div>
      <div>{isLoginIn ? <HomeLogin /> : <HomeNotLogin />}</div>
    </div>
  );
}
export default Home;
