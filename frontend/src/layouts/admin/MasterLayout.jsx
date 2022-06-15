import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { Routes, Route, Navigate} from 'react-router-dom';
import routes from './api/Routes'




const MasterLayout = () => {
  const [appearSidebar, setAppear] = useState(false);
  const appearClick = () => setAppear(!appearSidebar)

  
 

  return (

    <div className='MasterLayout'>
      <Navbar />
      <div className='sidebar-menu-icons' onClick={appearClick}>
        {appearSidebar ? <FaIcons.FaBars />  : <AiIcons.AiOutlineClose />}
      </div>
      <div className='container-layout'>
        <Sidebar show={appearSidebar} />
        <div className={appearSidebar ? 'responsive-main main-content' : 'main-content'}>
          <main>

            <Routes>
              {routes.filter(route => route.component).map(({path, component: Component}, idx) =>{
                return (
                  <Route key={idx} path={path} element={<Component />} />
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