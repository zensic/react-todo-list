import axios from "axios";

const url = "http://localhost:3001/users/";

const signIn = async (aEmail, aPassword) => {
  let user = null;
  await axios.post(`${url}login`, {
    email: aEmail,
    password: aPassword
  })
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.log(error);
    })
  return user;
}

const signUp = async (aEmail, aPassword) => {
  let user = null;
  await axios.post(`${url}create`, {
    email: aEmail,
    password: aPassword
  })
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.log(error);
    })

  return user;
}

export { signIn, signUp };