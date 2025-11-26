import { Heart, MessageCircle, Share, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoRePost, useLikePost } from "@/features/Post/hook";
function InteractionBar({
  likes = 0,
  comments = 0,
  shares = 0,
  reposts = 0,
  postId,
}) {
  const Interactions = [
    {
      icon: Heart,
      count: likes,
      action: () => handleLike(postId),
    },
    {
      icon: MessageCircle,
      count: comments,
      action: () => handleMessage(postId),
    },
    {
      icon: Repeat2,
      count: reposts,
      action: () => handleRepost(postId),
    },
    {
      icon: Share,
      count: shares,
      action: () => handleShare(postId),
    },
  ];
  const autoLike = useLikePost();
  const autoRepost = useAutoRePost(postId);
  const handleLike = async (postId) => {
    const result = await autoLike(postId);
    try {
      if (postId) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  };
  const handleMessage = () => {
    console.log("handleMessage");
  };
  const handleRepost = async (postId) => {
    const result = await autoRepost(postId);
    try {
      if (postId) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  };
  const handleShare = () => {
    console.log("handleShare");
  };

  return (
    <div className="flex gap-4 mt-3">
      {Interactions.map((icons, index) => {
        const Inter = icons.icon;
        return (
          <div key={index} className="flex items-center gap-1">
            <button className="p-1">
              <Button
                onClick={icons.action ? icons.action : undefined}
                className="border-none"
                variant="outline"
              >
                <Inter className="w-5 h-5 size-1" />
              </Button>
            </button>
            {icons.count >= 0 && (
              <span className="text-sm text-gray-600">{icons.count}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InteractionBar;
