import React, { useState } from 'react';

import './css/Login.css';

function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const { token } = await response.json();

      // Store token securely (e.g., in localStorage or sessionStorage)
      localStorage.setItem('token', token);

      // Redirect to dashboard or any other authenticated route
      window.location.href = '/dashboard';
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-h2'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className='login-label'>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className='login-input' />
        </div>
        <div>
          <label htmlFor="password" className='login-label'>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className='login-input' />
        </div>
        {errors && <div style={{ color: 'red' }}>{errors}</div>}
        <button type="submit" className='login-btn'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;


/*

import React from 'react'


function LoginPage() {
  return (
    <div>
        <form className='login-form'>

            <h1>Login</h1>
            <div>
                <label className='login-label'>Username</label>
                <input type="text" placeholder='Enter your username' className='login-input'  />
            </div>

            <div>
                <label className='login-label'>Password</label>
                <input type="password" placeholder='Enter your password' className='login-input' />
            </div>

            <button type="submit" className='login-btn'>Login</button>
            <button type ="reset" className='login-btn'>Reset</button>
            

            

        </form>
    

    </div>
  )
}

export default LoginPage
*/