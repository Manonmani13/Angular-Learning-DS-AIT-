import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem('auth', 'true'); // ✅ Save login
    alert("Login successful");
    navigate('/hm'); // ✅ Redirect to Home
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input type='text' placeholder='Username' /><br />
      <input type='password' placeholder='Password' /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
