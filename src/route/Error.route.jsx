import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import BackgroundComponent from "@/components/block/Background.component.jsx";
import ErrorComponent from "@/components/block/Error.component.jsx";

export const ErrorRoute = () => {
    const navigate = useNavigate();

    const actionFunction = () => {
        navigate("/");
    };

    const ERROR_DETAILS = {
        errorCode: "404 | Page Not Found",
        errorMessage:
            "Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any mistakes or use the button below to go back to the homepage.",
        actionIcon: <House className="mr-2 h-4 w-4" />,
        actionLabel: "Go to Home",
        actionFunction: actionFunction,
    };

    return (
        <BackgroundComponent>
            <ErrorComponent ERROR_DETAILS={ERROR_DETAILS} />
        </BackgroundComponent>
    );
};
