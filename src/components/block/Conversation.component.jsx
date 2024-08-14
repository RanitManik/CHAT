import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.jsx";
import {
    Search,
    EllipsisVertical,
    SmilePlus,
    Plus,
    SendHorizontal,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Button } from "@/components/ui/button.jsx";

const ConversationComponent = () => {
    return (
        <div className="flex h-full flex-col px-4">
            <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage
                            title="@shadcn"
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid justify-between">
                        <p className="text-lg font-[500]">Shadcn Manik</p>
                        <span className="text-xs font-normal opacity-50">
                            click here for contact info
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <Search />
                    <EllipsisVertical />
                </div>
            </div>
            <ScrollArea
                type="always"
                className="flex-1 rounded-lg bg-background"
            >
                <div className="min-h-svh"></div>
            </ScrollArea>
            <div className="py-3">
                <div className="flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Button
                            className="h-[50px] w-[50px]"
                            variant="outline"
                            size="icon"
                        >
                            <SmilePlus className="h-[1.5rem] w-[1.5rem] stroke-foreground" />
                        </Button>
                        <Button
                            className="h-[50px] w-[50px]"
                            variant="outline"
                            size="icon"
                        >
                            <Plus className="h-[1.5rem] w-[1.5rem] stroke-foreground" />
                        </Button>
                    </div>
                    <textarea
                        placeholder="Type a message"
                        rows="1"
                        spellCheck="true"
                        className="h-auto max-h-[20svh] max-w-full flex-1 resize-none overflow-auto break-all rounded-lg border border-input bg-background p-3 outline-none [field-sizing:content]"
                    ></textarea>
                    <Button
                        className="h-[50px] w-[50px]"
                        variant="outline"
                        size="icon"
                    >
                        <SendHorizontal className="h-[1.5rem] w-[1.5rem] stroke-foreground" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConversationComponent;
