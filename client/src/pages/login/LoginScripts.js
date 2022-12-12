import axios from "axios";

const url = "http://localhost:3001/users/";

// Login 
const handleConfirm = async (email, password, navigate) => {
  await axios.post(`${url}login`, {
    email: email,
    password: password
  })
    .then((result) => {
      sessionStorage.setItem("uid", result.data.uid);
      sessionStorage.setItem("email", result.data.email);
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error);
      alert("Invalid password or username!");
    })
}

// Registration
const handleRegister = async (email, password, navigate) => {
  await axios.post(`${url}create`, {
    email: email,
    password: password
  })
    .then((result) => {
      alert("Registered successfully!");
      sessionStorage.setItem("uid", result.data.uid);
      sessionStorage.setItem("email", result.data.email);
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error);
      alert("User already exists!");
    })
}

export { handleConfirm, handleRegister };