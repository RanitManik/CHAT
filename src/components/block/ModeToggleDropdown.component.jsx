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

const ModeToggleDropdownComponent = () => {
  const { setTheme, theme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 fill-accent stroke-primary transition-all duration-300 animate-in fade-in spin-in" />
        );
      case "light":
        return (
          <Sun className="absolute h-[1.2rem] w-[1.2rem] fill-accent stroke-primary transition-all duration-300 animate-in fade-in spin-in" />
        );
      case "system":
        return (
          <Monitor className="absolute h-[1.2rem] w-[1.2rem] fill-accent stroke-primary transition-all duration-300 animate-in fade-in zoom-in" />
        );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {getIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
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
  );
};

export default ModeToggleDropdownComponent;
