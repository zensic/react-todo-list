import React, { createContext, useEffect, useMemo, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { handleLogout } from "./LayoutScripts";

const UserContext = createContext();

const Layout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const userProvider = useMemo(() => ({user, setUser}), [user, setUser]);
  
  // useEffect(() => {
  //   let user 
  // } , []);

  return (
    <div className="layout">
      <nav>
        <Link to={``}>Home</Link>
        {user
          ? <><Link to={`dashboard`}>Dashboard</Link><button onClick={() => handleLogout(setUser, setUser, navigate)}>Logout</button></>
          : <Link to={`login`}>Login</Link>
        }
      </nav>
      <UserContext.Provider value={userProvider}>
        <div id="detail">
          <Outlet />
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default Layout;
export { UserContext };
