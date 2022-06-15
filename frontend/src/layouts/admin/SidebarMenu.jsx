import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';


const SidebarMenu = ({item}) => {

    const [SidebarDropdown, setSidebarDropdown] = useState(false);
    const sidebarDropdownClick = () => setSidebarDropdown(!SidebarDropdown);




  return (
    <>
        <Link className='sidebar-link-item' to={item.linkitem} onClick={item.subMenu && sidebarDropdownClick} >
            <div className='sidebar-icon-dropdown'>{item.icon}</div>
            <span className='sidebar-tittle'>{item.tittle}</span>
            <div className='sidebar-dropdown'>
                {item.subMenu && SidebarDropdown ? item.iconClose : item.subMenu ? item.iconOpen : null}
                
            </div>
            
        </Link>
        
        
        {SidebarDropdown && item.subMenu.map((item, index) => {
            return(
                <Link className='menu-dropdown' to={item.linkitem} key={index}>
                    <div className='dropdown-menu-sidebar'>
                        {item.icon}
                    </div>
                    <span className='sidebar-tittle'>{item.tittle}</span>
                </Link>
            )
        })}
    </>
  )
}

export default SidebarMenu