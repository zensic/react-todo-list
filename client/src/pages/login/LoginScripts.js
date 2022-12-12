import axios from "axios";

const url = "http://localhost:3001/users/";

const handleConfirm = async (email, password, setUser, navigate) => {
  // user has uid, email
  await axios.post(`${url}login`, {
    email: email,
    password: password
  })
    .then((result) => {
      setUser(result.data);
      sessionStorage.setItem("uid", result.data.uid);
      
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error);
      alert("Invalid password or username!");
    })
}

const handleRegister = async (email, password, setUser, navigate) => {
  // user has uid, email
  await axios.post(`${url}create`, {
    email: email,
    password: password
  })
    .then((result) => {
      alert("Registered successfully!");

      setUser(result.data);
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error);
      alert("User already exists!");
    })
}

export { handleConfirm, handleRegister };