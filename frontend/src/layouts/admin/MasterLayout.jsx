import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { Routes, Route, Navigate} from 'react-router-dom';
import routes from './api/Routes';
import jwt_decode from 'jwt-decode'
import axios from 'axios';





const MasterLayout = () => {
  
  const [appearSidebar, setAppear] = useState(false);
  const appearClick = () => setAppear(!appearSidebar);

  const [gender, setGender] = useState('');
  const [url, setURL] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [admin, setAdmin] = useState([]);

  
  

  useEffect(() => {
    refreshToken();
    getAdmin();
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/mdprotoken');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setGender(decoded.gender);
      setURL(decoded.url);
      setExpire(decoded.exp);
    } catch (error) {
      if(error.response){
        Navigate('/mdprologin')
      }
    }
  }

  const axiosJWT =  axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/mdprotoken');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setGender(decoded.gender);
      setURL(decoded.url);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const getAdmin = async () => {
    const response = await axiosJWT.get('http://localhost:5000/mdproAdmin', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setAdmin(response.data);
  }

  

  

  return (

    <div className='MasterLayout'>
      <Navbar admin={admin} />
      <div className='sidebar-menu-icons' onClick={appearClick}>
        {appearSidebar ? <FaIcons.FaBars />  : <AiIcons.AiOutlineClose />}
      </div>
      <div className='container-layout'>
        <Sidebar show={appearSidebar} email={email}  />
        <div className={appearSidebar ? 'responsive-main main-content' : 'main-content'}>
          <main>
            
              <Routes>
                {routes.filter(route => route.component).map(({path, component: Component}, idx) =>{
                  return (
                    <Route key={idx} path={path}  element={<Component name={name} email={email} admin={admin} gender={gender} url={url} />}  />
                  )
                  
                })}


                <Route path="*" element={<Navigate to="/mdproadmin/dashboard" />} />
                
                
                
              </Routes>
              
            
            
            

          </main>
        </div>
      </div>
    </div>
  )
}

export default MasterLayout