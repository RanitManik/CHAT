import { useEffect, useState } from "react";

const DeviceWarning = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const mobileDevices =
                /iphone|ipod|android|blackberry|windows phone|opera mini|iemobile|mobile/;
            const isMobileDevice = mobileDevices.test(userAgent);
            const isSmallScreen = window.innerWidth <= 1000;

            setIsMobile(isMobileDevice || isSmallScreen);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => {
            window.removeEventListener("resize", checkDevice);
        };
    }, []);

    if (isMobile) {
        return (
            <main
                className="grid min-h-svh place-items-center content-center gap-6 px-6 text-center"
                aria-live="assertive"
                role="alert"
            >
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    700 | Access Restricted
                </h1>
                <p className="max-w-2xl text-lg leading-7 opacity-80">
                    This platform is optimized for desktop use only. Please
                    revisit on a desktop device for the best experience. We are
                    actively developing a mobile application using React Native
                    to enhance your accessibility. Thank you for your patience.
                </p>
            </main>
        );
    }

    return <>{children}</>;
};

export default DeviceWarning;
