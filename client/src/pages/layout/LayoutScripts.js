const handleLogout = (navigate) => {
  sessionStorage.clear();
  navigate("/");
}

export { handleLogout };