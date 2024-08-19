import { Button } from "@/components/ui/button.jsx";
import { assets } from "@/assets/assets.js";
import { toast } from "sonner";
import useErrorHandlerComponent from "@/hooks/LoginErrorHandler.hook.jsx";

const providerAssets = {
    google: assets.google,
    microsoft: assets.microsoft,
    github: assets.github,
    facebook: assets.facebook,
};

export const OAuthButtonUi = ({ provider, onClick, ...props }) => {
    const { generateErrorMessage } = useErrorHandlerComponent();
    const ProviderIcon = providerAssets[provider];

    const onClickHandler = async () => {
        const signInPromise = async () => {
            await onClick();
            console.log("Successfully Signed in...");
        };
        toast.promise(signInPromise(), {
            loading: "Signing in, please wait...",
            success: "Sign-in successful! You are now logged in.",
            error: (error) => {
                console.log(error);
                return generateErrorMessage(error.code);
            },
        });
    };

    return (
        <Button
            title={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
            aria-label={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
            onClick={onClickHandler}
            variant="secondary"
            {...props}
        >
            <ProviderIcon className="h-full text-foreground" />
        </Button>
    );
};
