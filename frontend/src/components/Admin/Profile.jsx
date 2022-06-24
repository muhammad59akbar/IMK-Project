import React from 'react';
import './Profile.css';


const Profile = ({name, email, gender, url}) => {
  



  return (
    <div className='profile-container'>
      <div className='profile-left'>
        <img src={url} alt="" style={{Width: '100%', height: '100%' }}/>
      </div>
      <div className='profile-right'>
        <h2>Account Information</h2>
        <div className='profile-info'>

          {/* <div className='profile-group'>
            <label>Email</label>
            <input type="text" defaultValue={name} disabled onChange={(e) => setName(e.target.value)}  />
          </div> */}
          
          
          

          <div className='profile-group'>
            <label>Name</label>
            <div className='profile-item'>
              <p>{name}</p>
            </div>
          </div>

          <div className='profile-group'>
            <label>Email</label>
            <div className='profile-item'>
              <p>{email}</p>
            </div>
          </div>

          <div className='profile-group'>
            <label>Gender</label>
            <div className='profile-item'>
              <p>{gender}</p>
            </div>
          </div>

          

          
          
        </div>
      </div>
    </div>
  )
}

export default Profile