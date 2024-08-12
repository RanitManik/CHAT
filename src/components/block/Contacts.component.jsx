import { Input } from "@/components/ui/input.jsx";
import { Search } from "lucide-react";

const ContactsComponent = () => {
    return (
        <div className="p-4">
            <div className="relative">
                <Search className="absolute left-6 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-full bg-background pl-12"
                />
            </div>
            <div></div>
        </div>
    );
};

export default ContactsComponent;
