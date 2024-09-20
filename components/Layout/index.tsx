"use client";
import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import LayoutTypes from "../interfaces/LayoutTypes";
import Loader from "../Loader";
import { usePathname } from "next/navigation";

const Layout = ({ children, activePage }: LayoutTypes) => {
  const route = usePathname();

  return (
    <div>
      {/* <Loader /> */}
      <Navigation active={activePage} />
      <div className="flex flex-col">
        <main className="flex-1">{children}</main>
        {route !== "/not-found" && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
