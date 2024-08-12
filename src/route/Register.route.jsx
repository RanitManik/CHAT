import { SignUpFormComponent } from "@/components/block/SignUpForm.component.jsx";
import BackgroundComponent from "@/components/block/Background.component.jsx";

const RegisterRoute = () => {
    return (
        <BackgroundComponent>
            <SignUpFormComponent />
        </BackgroundComponent>
    );
};

export default RegisterRoute;
