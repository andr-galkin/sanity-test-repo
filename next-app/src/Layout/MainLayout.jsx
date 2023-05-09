import React from "react";

const MainLayout = ({ text, additionalClasses = "", children}) => {
  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <h1
        className={`${additionalClasses} text-[white] mb-8 font-semibold
            bg-gradient-to-r bg-clip-text text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-main`}
      >
        {text}
      </h1>
      {children}
    </div>
  );
};

export default MainLayout;
