import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function Layout() {
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  return (
    <div className={`relative`}>
      <Header openSidebar={() => setOpenSidebar(true)} />

      <Sidebar open={openSidebar} close={() => setOpenSidebar(false)} />

      <main
        className={`
          bg-base-100 overflow-x-hidden 
          px-4
        `}
      >
        <div
          className={`
            m-auto max-w-7xl w-full h-full
            mt-[100px] mb-10
          `}
        >
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
