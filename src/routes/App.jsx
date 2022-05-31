import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from  '../pages/login/login.jsx';
import Register from '../pages/register/register.jsx';
import HomeHall from '../pages/hall/homeHall.jsx'
import HomeKitchen from '../pages/kitchen/homeKitchen.jsx'
import {role} from '../service/apiProduct.jsx'




function App (){

  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />}/>
      <Route exact path="/main" element={role() === "hall" ? <HomeHall /> : <HomeKitchen />}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;