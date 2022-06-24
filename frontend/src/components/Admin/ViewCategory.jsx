import React from 'react';
import './ViewCategory.css';
// import { useState } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import { useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewCategory = ({admin}) => {
  
  // const [token, setToken] = useState('');
  // const [expire, setExpire] = useState('');
  // const [admin, setAdmin] = useState([]);

  const deleteAdmin = async(mdproAdminId) =>{
    try {
      await axios.delete(`http://localhost:5000/mdproAdmin/${mdproAdminId}`);
      window.confirm("do you want deleted this item ?")
      setTimeout(() => {
        window.location.reload(false);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  }


  // useEffect(() => {
  //   getAdmin();
  // }, [])

  // const axiosJWT =  axios.create();

  // axiosJWT.interceptors.request.use(async(config) => {
  //   const currentDate = new Date();
  //   if(expire * 1000 < currentDate.getTime()){
  //     const response = await axios.get('http://localhost:5000/mdprotoken');
  //     config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     setExpire(decoded.exp);
  //   }
  //   return config;
  // }, (error) => {
  //   return Promise.reject(error);
  // });

  // const getAdmin = async () => {
  //   const response = await axiosJWT.get('http://localhost:5000/mdproAdmin', {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       }
  //   });
  //   setAdmin(response.data);
  // }

  return (
    <div className='viewcat'>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admin.map((adm, idx) => {
            return(
            <tr key={adm.id}>
              <td>{idx + 1}</td>
              <td>
                <figure className='figure-prev img-center'>
                  <img src={adm.url}alt="" />
                </figure>
              </td>
              <td>{adm.name}</td>
              <td>{adm.email}</td>
              <td>
                <AiIcons.AiFillDelete className='view-delete' onClick={()=> deleteAdmin(adm.id)} />
                <Link to={`EditCategory/${adm.id}`} ><AiIcons.AiFillEdit className='view-delete'></AiIcons.AiFillEdit></Link> 
              
              </td>

            </tr>

            )
          })}
          

        </tbody>
        {/* <img src={`http://localhost:5000/${file}`} /> */}
          
      </table>
    </div>
  )
}

export default ViewCategory