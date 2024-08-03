const BackgroundComponent = ({ children }) => {
  return (
    <main className="m-auto bg-background duration-200 animate-in fade-in">
      <div className="mx-auto min-h-[100svh] max-w-[1900px] px-4">
        {children}
      </div>
    </main>
  );
};

export default BackgroundComponent;
