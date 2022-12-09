import { signIn, signUp } from "../../api/users";

const handleConfirm = async (email, password, authObj, navigate) => {
  // user has uid, email
  let user = await signIn(email, password);

  if (user) {
    authObj.setAuth(true);
    authObj.setUser(user);
    navigate("/dashboard");
  }
  else {
    alert("Invalid password or username!");
  }
}

const handleRegister = async (email, password, authObj, navigate) => {
  // user has uid, email
  let user = await signUp(email, password);

  if (user) {
    alert("Registered successfully!");

    authObj.setAuth(true);
    authObj.setUser(user);
    navigate("/dashboard");
  }
  else {
    alert("User already exists!");
  }
}

export { handleConfirm, handleRegister };