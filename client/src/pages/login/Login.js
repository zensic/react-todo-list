import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <h1>Sign in</h1>
      <img src="images/todolist.jpg" alt="Todolist" />
      <p>Email</p>
      <input type="email"></input>
      <p>Password</p>
      <input type="password"></input>
      <button className='button-primary'>Confirm</button>
      <button className='button-secondary'>Register</button>
    </div>
  )
}

export default Login