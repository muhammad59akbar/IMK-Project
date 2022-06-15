import React, { useState } from 'react';
import './css/Login.css';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MDPROLogin = () => {

  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const AuthLogin = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/mdprologin',{
        email: email,
        password: password,
      });
      Navigate('/mdproadmin/*');
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div className='login-container'>
      <div className='login-wrap'>
        <h2>Login System</h2>
        <form className='form-items' onSubmit={AuthLogin}>
          <div className='form-group'>
            <div className='icons'>
              <FaIcons.FaUserAlt />
            </div>
            <input type="email" name="email" defaultValue={email} required placeholder='email' onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div className='form-group'>
            <div className='icons'>
              <RiIcons.RiLockPasswordFill />
            </div>
            <input type="password" name="password" defaultValue={password} autoComplete="on" placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='form-group'>
            <button className='btn-grad'>Log in</button>
          </div>
          <span className='error'>{msg}</span>
        </form>
      </div>
    </div>
  )
}

export default MDPROLogin