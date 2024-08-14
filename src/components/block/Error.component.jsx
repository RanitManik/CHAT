import { Button } from "@/components/ui/button.jsx";

const ErrorComponent = ({ ERROR_DETAILS }) => {
    return (
        <main
            className="grid min-h-svh place-items-center content-center gap-6 px-6 text-center"
            aria-live="assertive"
        >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {ERROR_DETAILS.errorCode}
            </h1>
            <p className="max-w-2xl text-lg leading-7 opacity-80">
                {ERROR_DETAILS.errorMessage}
            </p>
            <Button onClick={ERROR_DETAILS.actionFunction}>
                {ERROR_DETAILS.actionIcon}
                {ERROR_DETAILS.actionLabel}
            </Button>
        </main>
    );
};

export default ErrorComponent;
