import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { assets } from "@/assets/assets.js";
import { useFirebase } from "@/context/Firebase.context.jsx";

const UserAvatarComponent = () => {
    const { user } = useFirebase();

    return (
        <>
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
        </>
    );
};

export default UserAvatarComponent;
