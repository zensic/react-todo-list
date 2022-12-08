import React, { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AuthContext = createContext();

const Layout = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="layout">
      <nav>
        <Link to={``}>Home</Link>
        <Link to={`login`}>Login</Link>
      </nav>
      <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
        <div id="detail">
          <Outlet />
        </div>
      </AuthContext.Provider>
    </div>
  );
};

export default Layout;
