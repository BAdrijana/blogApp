"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
