import { LoaderCircle } from "lucide-react";

export const LoaderCircleComponent = () => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 fade-in">
            <LoaderCircle className="h-32 w-32 animate-spin stroke-primary stroke-1" />
        </div>
    );
};
