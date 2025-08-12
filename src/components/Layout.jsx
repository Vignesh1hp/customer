import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <div className="flex font-[Figtree]">
        <SideBar />
        <Navbar />
        <main className="ml-80 mt-16">
          <Outlet /> {/* Where child pages will render */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
