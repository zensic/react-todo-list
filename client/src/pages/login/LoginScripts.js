import { signIn, signUp } from "../../api/users";

const handleConfirm = async (email, password, authObj, navigate) => {
  let isConfirmed = await signIn(email, password);
  if (isConfirmed) {
    authObj.setAuth(true);
    authObj.setUser(email);
    navigate("/dashboard");
  }
  else {
    alert("Invalid password or usename!");
  }
}

const handleRegister = async (email, password, authObj, navigate) => {
  let isRegistered = await signUp(email, password);

  if (isRegistered) {
    alert("Registered successfully!");

    authObj.setAuth(true);
    authObj.setUser(email);
    navigate("/dashboard");
  }
  else {
    alert("User already exists!");
  }
}

export { handleConfirm, handleRegister };