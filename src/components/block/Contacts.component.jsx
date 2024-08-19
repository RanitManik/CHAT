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
import ContactSummaryComponent from "@/components/block/ContactSummary.component.jsx";

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
                    <Button className="h-7 cursor-pointer rounded-full px-3 text-sm font-bold">
                        All
                    </Button>
                    <Button
                        className="h-7 cursor-pointer rounded-full px-3 text-sm font-bold"
                        variant="secondary"
                    >
                        Unread
                    </Button>
                    <Button
                        className="h-7 cursor-pointer rounded-full px-3 text-sm font-bold"
                        variant="secondary"
                    >
                        Favourites
                    </Button>
                    <Button
                        className="h-7 cursor-pointer rounded-full px-3 text-sm font-bold"
                        variant="secondary"
                    >
                        Groups
                    </Button>
                </div>
            </div>
            <ScrollArea type="always" className="flex-1 pr-4">
                <ContactSummaryComponent />
            </ScrollArea>
        </div>
    );
};

export default ContactsComponent;
