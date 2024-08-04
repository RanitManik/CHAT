import { assets } from "@/assets/assets.js";
import ThemeSwitcherIconComponent from "./ModeToggle.component.jsx";

const NavigationComponent = () => {
  return (
    <nav className="my-4 h-10">
      <div className="flex h-full items-center justify-between gap-8">
        <div className="flex h-full select-none items-center gap-4">
          <img className="h-full" src={assets.logo} alt="" />
          <h1 className="hidden text-2xl text-primary md:block">
            CHAT - Connect, Have a Chat
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcherIconComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavigationComponent;
