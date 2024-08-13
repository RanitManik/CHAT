import { Input } from "@/components/ui/input.jsx";
import { Search } from "lucide-react";
import { assets } from "@/assets/assets.js";

const ContactsComponent = () => {
    return (
        <div className="p-4">
            <div className="mb-3 flex h-10 select-none items-center gap-3">
                <assets.Logo className="h-6 w-6 transition-all" />
                <span className="sr-only">CHAT – Connect, Have A Talk</span>
                <h1 className="text-2xl font-semibold text-foreground">CHAT</h1>
            </div>
            <div className="relative">
                <Search className="absolute left-6 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full bg-background pl-12 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
            </div>
            <div></div>
        </div>
    );
};

export default ContactsComponent;
