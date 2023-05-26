import React, { useState } from 'react';
import './signup.css'
import axios from 'axios';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Perform signup logic using an API call
      const response = await axios.post('http://localhost:50/add', {
        firstName,
        lastName,
        dob,
        gender,
        email,
        phone,
        password,
      });

      // Assuming the response contains a success flag
      if (response.data.message=="Registered successfully") {
        // Signup successful, perform any additional actions if needed
        // ...
        // Optionally, you can redirect the user to a success page or login automatically
        window.location.href = '/LandingPage';
      } else {
        // Show error message
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle any errors from the API request
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='reg-container-fluid'>

    
    <div className="reg-container ml-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="mb-4 text-center">Sign Up</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="reg_label">First Name</label>
              <input
                type="text"
                className="reg_control"
                id="firstName"
                placeholder="first name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="reg_label">Last Name</label>
              <input
                type="text"
                className="reg_control"
                id="lastName"
                placeholder="last name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="reg_label">Date of Birth</label>
              <input
                type="date"
                className="reg_control"
                id="dob"
                value={dob}
                onChange={handleDobChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="reg_label">Gender</label>
              <select
                className="reg_control"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="reg_label">Email</label>
              <input
                type="email"
                className="reg_control"
                id="email"
                placeholder="EmailId"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="reg_label">Phone Number</label>
              <input
                type="text"
                className="reg_control"
                id="phone"
                placeholder="phone number"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="reg_label">Password</label>
              <input
                type="password"
                className="reg_control"
                id="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="reg_label">Confirm Password</label>
              <input
                type="password"
                className="reg_control"
                id="confirm-password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;

