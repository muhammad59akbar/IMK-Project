import React from 'react';
import './css/Sidebar.css';

import SidebarMenu from './SidebarMenu';
import { Sidebaritem } from './api/SidebarData.js';

const Sidebar = ({show}) => {

  



  return (
    <div className={show ? 'fadded sidebar' : 'sidebar'}>
     
      
      <div className='sidebar-menu'>
        {Sidebaritem.map((item, index) => {
          return (
            <SidebarMenu item={item} key={index} />
          )
        })}
      </div>
      
      <div className='sidebar-footer'>
        <h4>Logged in As</h4>
        <span>user@gmail.com</span>
      </div>
        
    </div>
  )
}

export default Sidebar