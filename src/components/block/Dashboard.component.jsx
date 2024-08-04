import NavigationComponent from "./Navigation.component.jsx";

const DashboardComponent = () => {
  return (
    <main className="m-auto grid min-h-svh place-items-center duration-200 animate-in fade-in">
      <div className="m-auto h-full max-h-[1000px] w-full max-w-[1900px] overflow-auto bg-background px-4 md:px-6 lg:border-2 lg:px-8">
        <NavigationComponent />
      </div>
    </main>
  );
};

export default DashboardComponent;
