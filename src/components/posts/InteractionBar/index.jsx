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
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button className="border-none" variant="outline">
                      <Inter className="w-5 h-5 size-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <Input
                          id="username-1"
                          name="username"
                          defaultValue="@peduarte"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
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
