import React, { useState } from 'react';
import { signUp } from '../../api/users';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>Sign in</h1>
      <img src="images/todolist.jpg" alt="Todolist" />
      <p>Email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <p>Password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button className='button-primary'>Confirm</button>
      <button className='button-secondary' onClick={() => signUp(email, password)}>Register</button>
    </div>
  )
}

export default Login