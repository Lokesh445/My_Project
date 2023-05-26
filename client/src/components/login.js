import React, { useState } from "react";
import './login.css'
import axios from "axios";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:50/signin', { email, password });

      // Assuming the response contains a success flag
      if (response.data.message == "login successfully") {
        // Redirect to the dashboard
        window.location.href = '/dashboard';
      } else {
        // Show error message
        setError('Invalid Username or Password');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      // Handle any errors from the API request
      console.error(error);
    }

  };

  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h2 className="mb-4 text-center p-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label" id="name">Username</label>
                <input
                  type="text"
                  className="loginform-control"
                  id="username"
                  placeholder="Username"
                  value={email}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" id="pass">Password</label>
                <input
                  type="password"
                  className="loginform-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
              <p className="text-center p-3" style={{ fontWeight: 'bolder' }}>Not a Member?  <a href="/signup">Sign Up</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
