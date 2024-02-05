import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.trim() === '') {
      setError("Password can't be blank");
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const dataToSend = {
      user: {
        name,
        email,
        password,
      },
    };

    axios.post(
      'http://127.0.0.1:4000/api/v1/users',
      dataToSend,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(response => {
      console.log('Response:', response.data);
      navigate('/Homepage');

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    })
    .catch(error => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message[0]
      ) {
        setError(error.response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    });
  };

  return (
    <div className="container">
  <div className="card mt-5">
    <div className="card-body">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>

        <div className="col-12">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            placeholder="Confirm Password"
          />
          {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default SignUp;