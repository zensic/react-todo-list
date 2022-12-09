import React, { createContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { handleLogout } from "./LayoutScripts";

const AuthContext = createContext();

const Layout = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  return (
    <div className="layout">
      <nav>
        <Link to={``}>Home</Link>
        {auth
          ? <><Link to={`dashboard`}>Dashboard</Link><button onClick={() => handleLogout(setAuth, setUser, navigate)}>Logout</button></>
          : <Link to={`login`}>Login</Link>
        }
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
export { AuthContext };
