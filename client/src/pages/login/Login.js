import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../layout/Layout";
import { handleConfirm, handleRegister } from './LoginScripts';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authObj = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="login">
      <h1>Sign in</h1>
      <img src="images/todolist.jpg" alt="Todolist" />
      <p>Email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <p>Password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button className='button-primary' onClick={async () => await handleConfirm(email, password, authObj, navigate)}>Confirm</button>
      <button className='button-secondary' onClick={async () => await handleRegister(email, password, authObj, navigate)}>Register</button>
    </div>
  )
}

export default Login