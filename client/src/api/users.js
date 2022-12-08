import axios from "axios";

const url = "http://localhost:3001/users/";

const signUp = (aEmail, aPassword) => {
  axios.post(`${url}create`, {
    email: aEmail,
    password: aPassword
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
}

export { signUp };