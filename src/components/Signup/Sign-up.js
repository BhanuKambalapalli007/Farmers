//import { useState } from 'react'
//import { useSignup } from '../hooks/useSignup'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// styles
import './Signup.css'

export default function Signup() {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/register', { name, email, password });
            console.log('Registration response:', response.data.message);
            setSuccess('Registration successful');
            setError('');
        } catch (error) {
            console.error('Registration error:', error.response.data.message);
            setError(error.response.data.message);
        }
    };

    const goToLogin = () => {
        navigate('/login');
    }

  return (
    <div className='body'>
    <div className='forms'>
      {/* <img src="https://thumbs.dreamstime.com/b/different-spices-herbs-stone-table-top-view-ingredients-cooking-food-background-different-spices-herbs-black-120232209.jpg" className="p1"/> */}
    <form className="forms" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label className='label'>
        <span>email:</span><br></br>
        <input
        className='input'
          required 
          type="email" 
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          
          
          
        />
      </label>
      <label className='label'>
        <span>password:</span><br></br>
        <input
        className='input'
          required
          type="password" 
          name='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          
        />
      </label>
      <label className='label'>
        <span>name:</span><br></br>
        <input
        className='input'
          required
          type="text" 
          name='name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
         
        />
      </label>
      
        
        <button type="submit">Register</button>
        <p className="error">{error}</p>
        <p className="success">{success}</p>
        {/* <p>Already Registered?</p> */}
        <button onClick={goToLogin}>Login</button>
    </form>
    </div>
    </div>
  )
}
