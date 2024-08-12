import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const NotificationDropDownComponent = () => {
    return (
        <Button className="relative" variant="outline" size="icon">
            <Bell className="h-[1.2rem] w-[1.2rem] fill-accent stroke-primary transition-all duration-300 animate-in fade-in" />
        </Button>
    );
};

export default NotificationDropDownComponent;
