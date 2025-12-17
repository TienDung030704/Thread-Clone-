import Header from "@/components/Header";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Camera,
  Bell,
  Instagram,
  Ellipsis,
  Users,
  Volume2,
  LockKeyhole,
  AlertCircle,
  MoveLeft,
  BadgePlus,
  Bookmark,
  LinkIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import ModalIndividual from "../Home/ModalIndividual";
import ModalUserFollow from "./ModalUserFollow";
import { useCurrentUser, useFetchUser } from "@/features/Auth/authUser/hook";
import { useProductList } from "@/features/product/hook";
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
import InteractionBar from "@/components/posts/InteractionBar";

function Individual() {
  const currentUser = useCurrentUser();
  const fetchUserInfo = useFetchUser();
  const [activeTab, setActiveTab] = useState("Thread");
  const tabs = ["Thread", "Thread trả lời", "File phương tiện", "Bài đăng lại"];
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const autoProduct = useProductList();
  const repostPosts = list.filter((item) => item.is_reposted_by_auth === true);

  // Handle save post
  const handleSaveClick = (postId) => {
    console.log("Save post:", postId);
    // TODO: Implement save post logic
  };

  // UseEffect fetch user info nếu chưa có khi reload
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (
      access_token &&
      (!currentUser || Object.keys(currentUser).length === 0)
    ) {
      fetchUserInfo();
    }
  }, [currentUser, fetchUserInfo]);
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

  return (
    <div>
      <div>
        <Sidebar />
        <Header>Trang cá nhân</Header>
        <PostCard>
          {/* Profile Header */}
          <div className="bg-white text-black p-6 rounded-t-2xl">
            {/* Header with name and actions */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-black">
                  {currentUser?.username || ""}
                </h1>
                <p className="text-gray-600 mt-3">
                  @{currentUser?.username || ""}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <img
                  className="w-21 h-21 object-cover rounded-lg"
                  src="avatarcanhan.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Icon trang cá nhân  */}
            <div className="flex justify-between items-center mb-6">
              <ModalUserFollow>
                <p className="text-gray-600 text-sm"> người theo dõi</p>
              </ModalUserFollow>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Chỉnh sửa trang cá nhân nút  */}
            <ModalIndividual>
              <button className="w-full bg-transparent border border-gray-300 text-black py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Chỉnh sửa trang cá nhân
              </button>
            </ModalIndividual>
          </div>
          {/* Navigation Tabs */}
          <div className="bg-white border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 min-h-96">
            {activeTab === "Thread" && (
              <div>
                {/* Có gì mới */}
                <div className="w-full border-b border-gray-200 pb-3 bg-white mb-6">
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

                {/* Hoàn tất trang cá nhân */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-black">
                      Hoàn tất trang cá nhân
                    </h2>
                    <span className="text-sm text-gray-500">Còn 2</span>
                  </div>

                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {/* Thêm tiểu sử */}
                    <div
                      className="bg-white border border-gray-200 text-black rounded-2xl p-6 "
                      style={{ width: "194px", height: "230px" }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <BarChart3 className="w-6 h-6 text-gray-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Thêm tiểu sử</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          Hãy giới thiệu về bản thân và cho mọi người biết bạn
                          thích gì.
                        </p>
                        <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                          Thêm tiểu sử
                        </Button>
                      </div>
                    </div>

                    {/* Tạo thread */}
                    <div
                      className="bg-white border border-gray-200 text-black rounded-2xl p-6 flex-shrink-0"
                      style={{ width: "194px", height: "230px" }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Tạo thread</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          Cho mọi người biết bạn đang nghĩ gì hoặc chia sẻ về
                          một hoạt động mới.
                        </p>
                        <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                          Đăng bài viết
                        </Button>
                      </div>
                    </div>

                    {/* Thêm ảnh đại diện */}
                    <div
                      className="bg-white border border-gray-200 text-black rounded-2xl p-6 flex-shrink-0"
                      style={{ width: "194px", height: "230px" }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Camera className="w-6 h-6 text-gray-600" />
                        </div>
                        <h3 className="font-semibold mb-2">
                          Thêm ảnh đại diện
                        </h3>
                        <p className="text-sm text-gray-600 mb-6">
                          Giúp mọi người dễ dàng nhận ra bạn hơn
                        </p>
                        <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                          Tải ảnh đại diện
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Thread trả lời" && (
              <div className="text-center text-gray-500">
                <p>Chưa có thread trả lời nào</p>
              </div>
            )}
            {activeTab === "File phương tiện" && (
              <div className="text-center text-gray-500">
                <p>Chưa có file phương tiện nào</p>
              </div>
            )}
            {activeTab === "Bài đăng lại" && (
              <div>
                {repostPosts.length > 0 ? (
                  <ul className="space-y-0">
                    {repostPosts.map((item) => (
                      <li
                        className="w-full px-4 py-6 border-b border-gray-100 last:border-b-0"
                        key={item.id}
                      >
                        <div className="flex gap-3">
                          <img
                            className="w-10 h-10 rounded-full flex-shrink-0"
                            src={item.user.avatar_url}
                            alt=""
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-black font-semibold">
                                  {item.user.username}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  {new Date(item.updated_at).toLocaleString(
                                    "vi-VN"
                                  )}
                                </span>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    className="border-none p-2 h-auto"
                                    variant="outline"
                                  >
                                    <Ellipsis className="w-5 h-5 cursor-pointer" />
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
                                      {item.is_saved_by_auth ? "Đã lưu" : "Lưu"}

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
                            </div>
                            <div className="mb-3">
                              <p className="text-black text-base leading-relaxed">
                                {item.content}
                              </p>
                            </div>
                            {item.image && (
                              <div className="mb-3">
                                <img
                                  className="max-h-96 w-full object-cover rounded-lg"
                                  src={item.image}
                                  alt=""
                                />
                              </div>
                            )}
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
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <p>Chưa có bài đăng lại nào</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </PostCard>
      </div>
    </div>
  );
}
export default Individual;
