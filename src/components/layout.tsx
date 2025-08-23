// src/components/Layout.tsx
import React from "react";
import Sidebar from "./sideBar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen gap-12 w-full">
       
      <Header />
       
      <div className=" flex justify-between items-end  bg-gray-50"> 
       <Sidebar />
 
        <main className="flex w-full items-end overflow-y-auto p-6">
          <div className="mx-auto w-[95rem] h-[85vh] max-w-[1200px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
