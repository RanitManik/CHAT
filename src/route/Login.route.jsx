import { LoginFormComponent } from "@/components/block/LoginForm.component.jsx";
import BackgroundComponent from "@/components/block/Background.component.jsx";
import { useFirebase } from "@/context/Firebase.context.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoaderCircleComponent } from "@/components/block/LoaderCircle.component.jsx";

const LoginRoute = () => {
    const { isLoggedIn, authDataLoading } = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authDataLoading && isLoggedIn) {
            navigate("/");
        }
    }, [authDataLoading, isLoggedIn, navigate]);

    if (authDataLoading) return <LoaderCircleComponent />;

    return (
        <BackgroundComponent>
            <LoginFormComponent />
        </BackgroundComponent>
    );
};

export default LoginRoute;
