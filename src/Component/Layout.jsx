import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "../CSS/Home.css"; // Include global styles

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
