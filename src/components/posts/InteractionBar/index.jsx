import { Heart, MessageCircle, Share, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function InteractionBar({ likes = 0, comments = 0, shares = 0, reposts = 0 }) {
  const Interactions = [
    {
      icon: Heart,
      count: likes,
    },
    {
      icon: MessageCircle,
      count: comments,
    },
    {
      icon: Repeat2,
      count: reposts,
    },
    {
      icon: Share,
      count: shares,
    },
  ];

  return (
    <div className="flex gap-4 mt-3">
      {Interactions.map((icons, index) => {
        const Inter = icons.icon;
        return (
          <div key={index} className="flex items-center gap-1">
            <button className="p-1">
              <Button className="border-none" variant="outline">
                <Inter className="w-5 h-5 size-1" />
              </Button>
            </button>
            {icons.count > 0 && (
              <span className="text-sm text-gray-600">{icons.count}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InteractionBar;
