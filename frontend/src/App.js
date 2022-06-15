import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import MdproLogin from './layouts/admin/MdproLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mdproadmin/*' name='Admin' element={<MasterLayout />} />
        <Route path='mdprologin' name='Login' element={<MdproLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
