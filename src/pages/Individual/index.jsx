import Header from "@/components/Header";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";

function Individual() {
  return (
    <div>
      <div>
        <Sidebar />
        <Header>Trang cá nhân</Header>
        <PostCard />
      </div>
    </div>
  );
}
export default Individual;
