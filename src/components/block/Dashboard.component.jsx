import { assets } from "../../assets/assets.js";

const DashboardComponent = () => {
  return (
    <>
      <div
        className="absolute inset-0 opacity-10 mix-blend-multiply dark:opacity-50 dark:mix-blend-screen"
        style={{ backgroundImage: `url(${assets.doodle})` }}
      ></div>
      <nav>{/* Navigation content */}</nav>
      <main className="h-screen min-w-[100px]">{/* Main content */}</main>
    </>
  );
};

export default DashboardComponent;
