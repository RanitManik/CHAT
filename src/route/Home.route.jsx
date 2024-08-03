import BackgroundComponent from "@/components/block/Background.component.jsx";
import { useFirebase } from "@/context/firebase.context.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoaderComponent } from "@/components/block/Loader.component.jsx";

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
      <p className="text-center">This is the home route</p>
    </BackgroundComponent>
  );
};
