import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditCategory = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [file, setFile] = useState('');
    const [prev, setPrev] = useState('');

    const serverBaseURI = 'http://localhost:5000';

    

    const { id } = useParams();
    
    useEffect(()=> {
        getCategoryById();
    },[]);

    const getCategoryById = async () => {
        const response = await axios.get(`http://localhost:5000/mdproAdmin/${id}`)
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setFile(response.data.image);
        setPrev(response.data.url);
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPrev(URL.createObjectURL(image));
      };



  return (
    <div className='profile-container'>
      <div className='profile-left'>
        <input type="file" onChange={loadImage} />
        {prev ? ( 
                <figure className='figure-prev'>
                    <img src={prev} alt="" />
                </figure>
            ) : (
                ""
        )}
      </div>
      <div className='profile-right'>
        <h2>Account Information</h2>
        <div className='profile-info'>

          <div className='profile-group'>
            <label>Name</label>
            <input type="text" defaultValue={name} disabled onChange={(e) => setName(e.target.value)}  />
          </div>

          <div className='profile-group'>
            <label>Email</label>
            <input type="text" defaultValue={email} disabled onChange={(e) => setEmail(e.target.value)}  />
          </div>

          <div className='profile-group'>
            <label>Gender</label>
            <input type="text" defaultValue={gender} disabled onChange={(e) => setGender(e.target.value)}  />
          </div>


          


        </div>
      </div>
    </div>
  )
}

export default EditCategory