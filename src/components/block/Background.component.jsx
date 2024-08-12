const BackgroundComponent = ({ children }) => {
    return (
        <div className="m-auto duration-200 animate-in fade-in">
            <div className="mx-auto grid min-h-[100svh] max-w-[1900px] items-center caret-primary">
                {children}
            </div>
        </div>
    );
};

export default BackgroundComponent;
