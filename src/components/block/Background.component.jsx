const BackgroundComponent = ({ children }) => {
  return (
    <div className="m-auto bg-background duration-200 animate-in fade-in">
      <div className="mx-auto min-h-[100svh] max-w-[1900px] caret-primary">
        {children}
      </div>
    </div>
  );
};

export default BackgroundComponent;
