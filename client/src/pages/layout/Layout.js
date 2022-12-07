import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <Link to={`home`}>Home</Link>
        <Link to={`login`}>Login</Link>
      </nav>
      <div id="detail"><Outlet /></div>
    </div>
  );
};

export default Layout;
