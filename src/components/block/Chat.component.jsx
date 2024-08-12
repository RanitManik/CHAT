import { assets } from "@/assets/assets.js";

function ChatComponent() {
    return (
        <div
            className="absolute inset-0 bg-opacity-10 mix-blend-multiply dark:bg-opacity-50 dark:mix-blend-screen"
            style={{ backgroundImage: `url(${assets.doodle})` }}
        ></div>
    );
}

export default ChatComponent;
