import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic validation for empty fields
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }
    
    // Custom error handling
    if (email !== 'user@gmail.com') {
      setError(`Invalid email: ${email}`);
    } else if (password !== '123') {
      setError(`Invalid password: ${password}`);
    } else {
      alert('Login successful!');
      setError('');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
