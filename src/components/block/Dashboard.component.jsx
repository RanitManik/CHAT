import NavigationComponent from "./Navigation.component.jsx";
import BackgroundComponent from "./Background.component.jsx";

const DashboardComponent = () => {
  return (
    <BackgroundComponent>
      <div className="m-auto grid min-h-svh place-items-center">
        <div className="m-auto h-full max-h-[1000px] w-full max-w-[1900px] overflow-auto bg-background px-4">
          <NavigationComponent />
        </div>
      </div>
    </BackgroundComponent>
  );
};

export default DashboardComponent;
