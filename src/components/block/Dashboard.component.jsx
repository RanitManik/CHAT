import NavigationComponent from "./Navigation.component.jsx";
import ConversationComponent from "@/components/block/Conversation.component.jsx";
import ContactsComponent from "@/components/block/Contacts.component.jsx";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable.jsx";

const DashboardComponent = () => {
    return (
        <main>
            <div className="relative flex h-screen max-h-[1080px] max-w-[1920px] flex-col bg-background">
                <NavigationComponent />
                <ResizablePanelGroup
                    direction="horizontal"
                    className="flex-1 bg-accent/40"
                >
                    <ResizablePanel
                        defaultSize={30}
                        className="ml-16 min-w-[400px] max-w-[min(40vw,600px)]"
                    >
                        <ContactsComponent />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={70} className="flex flex-col">
                        <ConversationComponent />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </main>
    );
};

export default DashboardComponent;
