import React from 'react';
import './css/Sidebar.css';

import SidebarMenu from './SidebarMenu';
import { Sidebaritem } from './api/SidebarData.js';
// import { Link } from 'react-router-dom';
// import * as HiIcons from 'react-icons/hi';

const Sidebar = ({show, email }) => {


  return (
    <div className={show ? 'fadded sidebar' : 'sidebar'}>
     
      
      <div className='sidebar-menu'>
        {Sidebaritem.map((item, index) => {
          return (
            <SidebarMenu item={item} key={index}  />
          )
        })}
        
        
        {/* <Link to={`Profile/${email}`} className="sidebar-link-item">
          <div className='sidebar-icon-dropdown'>
            <HiIcons.HiViewBoards />
          </div>
          <span className='sidebar-tittle'>Profile</span>
          <div className='sidebar-dropdown'></div>
        </Link> */}
        
      </div>
      
      <div className='sidebar-footer'>
        <h4>Logged in As</h4>
        <span>{email}</span>
      </div>
        
    </div>
  )
}

export default Sidebar