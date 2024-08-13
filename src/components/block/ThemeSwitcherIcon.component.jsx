import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/Theme.context.jsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip.jsx";

const ThemeSwitcherIconComponent = () => {
    const { setTheme, theme } = useTheme();

    const getIcon = () => {
        switch (theme) {
            case "dark":
                return (
                    <Moon className="h-6 w-6 rotate-0 fill-accent stroke-primary transition-all duration-300 animate-in fade-in spin-in" />
                );
            case "light":
                return (
                    <Sun className="absolute h-6 w-6 fill-accent stroke-primary transition-all duration-300 animate-in fade-in spin-in" />
                );
            case "system":
                return (
                    <Monitor className="absolute h-6 w-6 fill-accent stroke-primary transition-all duration-300 animate-in fade-in zoom-in" />
                );
        }
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    {getIcon()}
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Toggle theme
                            </TooltipContent>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                            value={theme}
                            onValueChange={setTheme}
                        >
                            <DropdownMenuRadioItem value="light">
                                <Sun className="mr-2 h-4 w-4" />
                                <span>Light</span>
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark">
                                <Moon className="mr-2 h-4 w-4" />
                                <span>Dark</span>
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="system">
                                <Monitor className="mr-2 h-4 w-4" />
                                <span>System</span>
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ThemeSwitcherIconComponent;
