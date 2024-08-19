import { Input } from "@/components/ui/input.jsx";
import { Search, UserRoundPlus, EllipsisVertical } from "lucide-react";
import { assets } from "@/assets/assets.js";
import { Button } from "@/components/ui/button.jsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Badge } from "@/components/ui/badge";

const ContactsComponent = () => {
    return (
        <div className="flex h-full max-h-full flex-col gap-4 py-4">
            <div className="flex h-10 justify-between px-4">
                <div className="flex h-10 select-none items-center gap-3">
                    <assets.Logo className="h-6 w-6 transition-all" />
                    <span className="sr-only">CHAT – Connect, Have A Talk</span>
                    <h1 className="text-2xl font-semibold text-foreground">
                        CHAT
                    </h1>
                </div>
                <div className="flex h-10 select-none items-center gap-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <UserRoundPlus className="stroke-foreground" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Add Contact</TooltipContent>
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
            <div>
                <div className="relative mb-2 h-12 px-4">
                    <Search className="absolute left-8 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-background pl-12 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>
                <div className="flex select-none gap-2 px-4">
                    <Badge className="cursor-pointer text-sm">All</Badge>
                    <Badge
                        className="cursor-pointer text-sm"
                        variant="secondary"
                    >
                        Unread
                    </Badge>
                    <Badge
                        className="cursor-pointer text-sm"
                        variant="secondary"
                    >
                        Favourites
                    </Badge>
                    <Badge
                        className="cursor-pointer text-sm"
                        variant="secondary"
                    >
                        Groups
                    </Badge>
                </div>
            </div>
            <ScrollArea type="always" className="flex-1 pr-4">
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="flex h-20 cursor-pointer select-none items-center gap-4 border-b border-border py-2 pl-4 pr-4 transition-all last:border-none hover:bg-primary/30"
                        >
                            <img
                                className="h-full object-cover py-2"
                                src={`${assets.user}`}
                                alt="default user-image"
                            />
                            <div>
                                <span className="text-xl">Ranit Manik</span>
                                <p className="line-clamp-1 overflow-hidden text-ellipsis text-sm text-foreground/70">
                                    Do you even have the slightest idea, bro?
                                    What the hell are you talking about? Google
                                    already has an in-built pre-scanning APK
                                    feature. It scans your app before installing
                                    it, ensuring safety.
                                </p>
                            </div>
                        </div>
                    ))}
            </ScrollArea>
        </div>
    );
};

export default ContactsComponent;
