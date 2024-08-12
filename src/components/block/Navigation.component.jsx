import { assets } from "@/assets/assets.js";
import ThemeSwitcherIconComponent from "./ModeToggleDropdown.component.jsx";
import NotificationDropDownComponent from "@/components/block/NotificationDropDown.component.jsx";
import ProfileDropDownComponent from "@/components/block/ProfileDropDown.Component.jsx";

const NavigationComponent = () => {
    return (
        <nav className="my-4 grid h-10 grid-cols-[1fr,_auto] items-center gap-4">
            <div className="flex h-10 items-center justify-between gap-8">
                <div className="flex h-full select-none items-center gap-4">
                    <img className="h-full" src={`${assets.logo}`} alt="" />
                    <h1 className="hidden text-2xl text-primary lg:block">
                        CHAT - Connect, Have a Chat
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeSwitcherIconComponent />
                    <NotificationDropDownComponent />
                </div>
            </div>
            <ProfileDropDownComponent />
        </nav>
    );
};

export default NavigationComponent;
