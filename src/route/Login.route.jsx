import { LoginFormComponent } from "@/components/block/LoginForm.component.jsx";
import BackgroundComponent from "@/components/block/Background.component.jsx";
import { useFirebase } from "@/context/Firebase.context.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoaderComponent } from "@/components/block/Loader.component.jsx";

const LoginRoute = () => {
    const { isLoggedIn, authDataLoading } = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authDataLoading && isLoggedIn) {
            navigate("/");
        }
    }, [authDataLoading, isLoggedIn, navigate]);

    if (authDataLoading) return <LoaderComponent />;

    return (
        <BackgroundComponent>
            <LoginFormComponent />
        </BackgroundComponent>
    );
};

export default LoginRoute;
