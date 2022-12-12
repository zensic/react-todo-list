import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { handleLogout } from "./LayoutScripts";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <nav>
        <Link to={``}>Home</Link>
        {sessionStorage.getItem("email")
          ? <><Link to={`dashboard`}>Dashboard</Link><button onClick={() => handleLogout(navigate)}>Logout</button></>
          : <Link to={`login`}>Login</Link>
        }
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;