const handleLogout = (setAuth, setUser, navigate) => {
  setAuth(false);
  setUser(null)
  navigate("/");
}

export { handleLogout };