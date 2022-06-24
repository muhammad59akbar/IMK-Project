import React, { useState } from 'react';
import './css/Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Navbar = ({admin}) => {

  const Navigate = useNavigate();

  const [dropdown, setDropdown] = useState (false);
  const dropdownClick = () => setDropdown (!dropdown);

  const Logout = async() => {
    try {
      await axios.delete('http://localhost:5000/mdprologout');
      Navigate('/mdprologin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navbar-container'>
        <Link to="/mdproadmin"><h2 className='navbar-tittle'>MDPRO</h2></Link>
        <div className='navbar-search'>
            <form>
                <input type="text" placeholder='Search For...' />
                <button className='navbar-button-search'><FaIcons.FaSearch className='icon-nav-search' /></button>
            </form>
            <div className='navbar-option' onClick={dropdownClick}>
              <FaIcons.FaUser className='navbar-dropdown'/>
              <ul className={dropdown ? 'dropdown-menu active' : 'dropdown-menu-visible'}>
                
                <li><Link to={`EditCategory/${admin.id}`}>Settings</Link></li>
                <li><Link to='#'>Activity Log</Link></li>
                <li><hr /></li>
                <li><button onClick={Logout}>Logout</button></li>
              </ul>
            </div>
         </div>
        

    </div>
  )
}

export default Navbar