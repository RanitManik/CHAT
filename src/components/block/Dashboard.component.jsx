import NavigationComponent from "./Navigation.component.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

const DashboardComponent = () => {
  return (
    <main>
      <div className="flex h-screen max-h-[1080px] max-w-[1920px] flex-col bg-background px-4 md:px-6 lg:border-2 lg:px-8">
        <NavigationComponent />
        <div className="mb-4 flex h-full overflow-hidden rounded-lg border bg-accent/40 md:mb-6 lg:mb-8">
          <ScrollArea type="always" className="h-full flex-1 border-r">
            <div className="h-svh"></div>
          </ScrollArea>
          <ScrollArea type="always" className="h-full flex-1 border-r">
            <div className="h-svh"></div>
          </ScrollArea>
          <ScrollArea type="always" className="h-full flex-1">
            <div className="h-svh"></div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
