import {
    MessageSquareText,
    UsersRound,
    CircleFadingPlus,
    Rss,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import SettingsDropDownComponent from "@/components/block/SettingsDropDown.Component.jsx";
import { Button } from "@/components/ui/button.jsx";
import ThemeSwitcherIconComponent from "@/components/block/ThemeSwitcherIcon.component.jsx";
import UserAvatarComponent from "@/components/block/UserAvatar.component.jsx";

const NavigationComponent = () => {
    return (
        <aside className="absolute inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="group rounded-full bg-primary/10 hover:rounded-lg"
                            >
                                <MessageSquareText className="h-6 w-6 stroke-primary group-hover:stroke-foreground" />
                                <span className="sr-only">Chats</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Chats</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <CircleFadingPlus className="h-6 w-6 stroke-foreground" />
                                <span className="sr-only">Story</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Story</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <UsersRound className="h-6 w-6 stroke-foreground" />
                                <span className="sr-only">Groups</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Groups</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Rss className="h-6 w-6 stroke-foreground" />
                                <span className="sr-only">Communities</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Communities
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <ThemeSwitcherIconComponent />
                <SettingsDropDownComponent />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="mt-2 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full"
                            >
                                <UserAvatarComponent />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Profile</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
};

export default NavigationComponent;
