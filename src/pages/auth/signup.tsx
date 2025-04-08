import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { name: form.name },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess('Successfully signed up! Check your maid id..');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Your Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={form.password}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="signup-input"
          required
        />
        {error && <p className="signup-error">{error}</p>}
        {success && <p className="signup-success">{success}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
        <p className="signup-login-redirect">
          Already have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
