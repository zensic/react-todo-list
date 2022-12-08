import axios from "axios";

const url = "http://localhost:3001/users/";

const signUp = async (aEmail, aPassword) => {
  let confirmed = false;
  await axios.post(`${url}create`, {
    email: aEmail,
    password: aPassword
  })
    .then((result) => {
      console.log(result);
      confirmed = true;
    })
    .catch((error) => {
      console.log(error);
    })

  return confirmed;
}

const signIn = async (aEmail, aPassword) => {
  let confirmed = false;
  await axios.post(`${url}login`, {
    email: aEmail,
    password: aPassword
  })
    .then((result) => {
      console.log(result);
      confirmed = true;
    })
    .catch((error) => {
      console.log(error);
    })
  return confirmed;
}

export { signUp, signIn };