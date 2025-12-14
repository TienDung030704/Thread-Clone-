import Header from "@/components/Header";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useGetCurrentInformation } from "@/features/Post/postDetail/hook";
import {
  BarChart3,
  Camera,
  Bell,
  MoreHorizontal,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import ModalIndividual from "../Home/ModalIndividual";
import { useGetCurrentUser } from "@/features/Auth";

function Individual() {
  const currentInformation = useGetCurrentUser();
  const [activeTab, setActiveTab] = useState("Thread");

  const tabs = ["Thread", "Thread trả lời", "File phương tiện", "Bài đăng lại"];

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
                  {currentInformation?.username || ""}
                </h1>
                <p className="text-gray-600 mt-3">
                  @{currentInformation?.username || ""}
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
              <p className="text-gray-600 text-sm"> 3 người theo dõi</p>
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
                    <Modal userAuth={currentInformation}>
                      <input
                        type="text"
                        placeholder="Có gì mới?"
                        className="flex-1 bg-transparent text-gray-500 placeholder-gray-400 outline-none"
                      />
                    </Modal>
                    <Modal userAuth={currentInformation}>
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
              <div className="text-center text-gray-500">
                <p>Chưa có bài đăng lại nào</p>
              </div>
            )}
          </div>
        </PostCard>
      </div>
    </div>
  );
}
export default Individual;
