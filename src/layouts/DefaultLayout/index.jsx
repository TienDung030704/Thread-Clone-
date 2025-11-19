import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import InteractionBar from "@/components/posts/InteractionBar";
import PostCard from "@/components/posts/PostCard";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default DefaultLayout;
