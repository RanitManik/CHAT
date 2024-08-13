import {
    MessageSquareText,
    UsersRound,
    CircleFadingPlus,
    Rss,
} from "lucide-react";
import { assets } from "@/assets/assets.js";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import SettingsDropDownComponent from "@/components/block/SettingsDropDown.Component.jsx";
import { Button } from "@/components/ui/button.jsx";
import { toast } from "sonner";
import ThemeSwitcherIconComponent from "@/components/block/ThemeSwitcherIcon.component.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useFirebase } from "@/context/Firebase.context.jsx";

const NavigationComponent = () => {
    const { user } = useFirebase();
    return (
        <aside className="absolute inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Button
                    variant="outline"
                    className="group rounded-full bg-primary/10 hover:border-primary"
                    size="icon"
                    onClick={() => toast.info("Welcome to CHAT")}
                >
                    <assets.Logo className="h-6 w-6 stroke-foreground transition-all group-hover:scale-110" />
                    <span className="sr-only">CHAT – Connect, Have A Talk</span>
                </Button>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="bg-primary/10"
                            >
                                <MessageSquareText className="h-6 w-6 stroke-primary" />
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
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full"
                            >
                                {user && user.displayName ? (
                                    <Avatar>
                                        <AvatarImage
                                            src={user.photoURL}
                                            alt={`@${user.displayName}`}
                                        />
                                        <AvatarFallback className="text-foreground">
                                            {user.displayName
                                                .split(" ")
                                                .map((part) => part[0])
                                                .slice(0, 2)
                                                .join("")
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                ) : (
                                    <img
                                        className="h-full w-full object-cover"
                                        src={`${assets.user}`}
                                        alt="default user-image"
                                    />
                                )}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">User</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <SettingsDropDownComponent />
            </nav>
        </aside>
    );
};

export default NavigationComponent;
