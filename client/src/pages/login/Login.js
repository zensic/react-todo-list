import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from "../../api/users";
import { AuthContext } from "../layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authObj = useContext(AuthContext);
  const navigate = useNavigate();

  const handleConfirm = async () => {
    let isConfirmed = await signIn(email, password);
    if (isConfirmed) {
      authObj.setAuth(true);

      navigate("/dashboard");
    }
    else {

    }
  }

  const handleRegister = async () => {
    let isRegistered = await signUp(email, password);

    if (isRegistered) {
      authObj.setAuth(true);
      navigate("/dashboard");
    }
    else {

    }
  }

  return (
    <div className="login">
      <h1>Sign in</h1>
      <img src="images/todolist.jpg" alt="Todolist" />
      <p>Email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <p>Password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button className='button-primary' onClick={async () => await handleConfirm(email, password)}>Confirm</button>
      <button className='button-secondary' onClick={async () => await handleRegister(email, password)}>Register</button>
    </div>
  )
}

export default Login