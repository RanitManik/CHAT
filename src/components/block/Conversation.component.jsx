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
    CircleX,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useState } from "react";
import { useTheme } from "@/context/Theme.context.jsx";
import Picker from "@emoji-mart/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import ChatComponent from "@/components/block/Chat.component.jsx";

const ConversationComponent = () => {
    const [openEmojiSelector, setOpenEmojiSelector] = useState(false);
    const [text, setText] = useState("");
    const { theme } = useTheme();
    const emojiTheme = theme === "system" ? "auto" : theme;

    const handleEmoji = (e) => {
        setText((prev) => prev + e.native);
        console.log(e.native);
    };

    return (
        <div className="flex h-full flex-col px-4">
            <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-4">
                    <Avatar className="select-none">
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
                <div className="flex items-center gap-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Search className="stroke-foreground" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Search</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <EllipsisVertical className="stroke-foreground" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Menu</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <ScrollArea
                type="always"
                className="relative flex-1 rounded-lg bg-background"
            >
                <div
                    className={`absolute bottom-4 caret-foreground ${openEmojiSelector ? "visible" : "invisible"} left-4`}
                >
                    <Picker
                        previewPosition="none"
                        skinTonePosition="search"
                        onClickOutside={() => {
                            if (openEmojiSelector) {
                                setOpenEmojiSelector(false);
                            }
                        }}
                        onEmojiSelect={handleEmoji}
                        theme={emojiTheme}
                    />
                </div>
                <ChatComponent />
            </ScrollArea>
            <div className="py-3">
                <div className="flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        className={`h-[50px] w-[50px] ${openEmojiSelector ? "bg-muted" : ""}`}
                                        variant="outline"
                                        size="icon"
                                        onClick={() =>
                                            setOpenEmojiSelector(
                                                (prev) => !prev,
                                            )
                                        }
                                    >
                                        {openEmojiSelector ? (
                                            <CircleX className="h-[1.5rem] w-[1.5rem] stroke-primary animate-in fade-in zoom-in" />
                                        ) : (
                                            <SmilePlus className="h-[1.5rem] w-[1.5rem] stroke-foreground animate-in fade-in zoom-in" />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {!openEmojiSelector
                                        ? "Emoji Picker"
                                        : "Close Emoji Picker"}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        className="h-[50px] w-[50px]"
                                        variant="outline"
                                        size="icon"
                                    >
                                        <Plus className="h-[1.5rem] w-[1.5rem] stroke-foreground" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Attach</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <textarea
                        placeholder="Type a message"
                        rows="1"
                        spellCheck="true"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="h-auto max-h-[20svh] max-w-full flex-1 resize-none overflow-auto break-all rounded-lg border border-input bg-background p-3 outline-none [field-sizing:content]"
                    ></textarea>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    className="h-[50px] w-[50px]"
                                    variant="outline"
                                    size="icon"
                                >
                                    <SendHorizontal className="h-[1.5rem] w-[1.5rem] stroke-foreground" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Send</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
};

export default ConversationComponent;
