const PageWrapper = ({ children }) => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mx-auto max-w-7xl overflow-hidden">
      {children}
    </div>
  );
};

export default PageWrapper;