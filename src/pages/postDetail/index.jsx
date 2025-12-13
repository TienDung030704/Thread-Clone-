import Header from "@/components/Header";
import InteractionBar from "@/components/posts/InteractionBar";
import PostCard from "@/components/posts/PostCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  useAutoPostDetail,
  useGetCurrentInformation,
} from "@/features/Post/postDetail/hook";
import { ArrowBigLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const param = useParams();
  const autoProduct = useAutoPostDetail();
  const autoSinglePost = useGetCurrentInformation();
  const [post, setPost] = useState([]);

  // UseEffect render ra dữ liệu bài post
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postId = param.postId;
        const result = await autoProduct(postId);
        if (result) {
          console.log("in ra", result);
          setPost(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Header>
          <ArrowBigLeft />
          Thread
        </Header>
        <Sidebar />
        <PostCard>
          <div>
            <ul>
              <li>{post.content}</li>
            </ul>
          </div>
          <InteractionBar />
        </PostCard>
      </div>
    </div>
  );
}
export default PostDetails;
