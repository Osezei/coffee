"use client";
import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import LayoutTypes from "../interfaces/LayoutTypes";
import Loader from "../Loader";
import { usePathname } from "next/navigation";
import { motion, scroll, useScroll } from "framer-motion";

const Layout = ({ children, activePage }: LayoutTypes) => {
  const route = usePathname();
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Loader />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Navigation active={activePage} />
      <div className="flex flex-col">
        <main className="flex-1">{children}</main>
        {route !== "/not-found" && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
