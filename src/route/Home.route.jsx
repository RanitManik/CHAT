import BackgroundComponent from "@/components/block/Background.component.jsx";
import { useFirebase } from "@/context/Firebase.context.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoaderComponent } from "@/components/block/Loader.component.jsx";
import DashboardComponent from "../components/block/Dashboard.component.jsx";

export const HomeRoute = () => {
    const { user, loading } = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading) {
            navigate("/login");
        }
    }, [navigate, user, loading]);

    if (loading) return <LoaderComponent />;

    if (!user) return null;

    return (
        <BackgroundComponent>
            <DashboardComponent />
        </BackgroundComponent>
    );
};
